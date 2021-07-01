const createFeatureFlag = require("./createFeatureFlag")
const createFeatureFlagGroup = require("./createFeatureFlagGroup")


const addFlags = async (keystone, {
    group,
    flags
}) => {

    const {
        data: {
            allFeatureFlagGroups,
        },
    } = await keystone.executeGraphQL({
        context: keystone.createContext({ skipAccessControl: true }),
        query:`
        query {
            allFeatureFlagGroups(
                where: {
                    key: ${group.key}
                }
            ) {
                count
            }
        }`
    });

    
    let flagGroup

    if( Array.isArray(allFeatureFlagGroups) && allFeatureFlagGroups.length > 0 ) {
        flagGroup = allFeatureFlagGroups[0]
    }

    if (!flagGroup) {

    
        flagGroup = await createFeatureFlagGroup(keystone, {
            ...group
        })

    }

    try {

        flags.forEach(async f=>{
            const {
                 data: {
                    _allFeatureFlagsMeta: { count },
                },
            } = await keystone.executeGraphQL({
                context: keystone.createContext({ skipAccessControl: true }),
                query:`
                query {
                _allFeatureFlagsMeta(
                    where: {
                        key: "${f.key}"
                    }
                ) {
                    count
                }
                }`
            });
    
    
            if (count === 0) {
        
                createFeatureFlag(keystone, {
                    ...f,
                    group: flagGroup
                })

            }


        })
	
    
    } catch(err) {

		console.log("Error", err);
        
	}


}

module.exports = addFlags