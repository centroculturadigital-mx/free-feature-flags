const createFeatureFlag = async (keystone, {
    name,
    key,
    description,
    definitionOfDone,
    value,
    group,
    status,
}) => {


    let newFeatureFlag
		
    newFeatureFlag = {
        name,
        key,
        description,
        definitionOfDone,
        value,
        status,
    }

    if( group && group.id ) {
        newFeatureFlag.group = {
            connect: {
                id: group.id
            }
        }
    }


	try {
		const res = await keystone.executeGraphQL({
			context: keystone.createContext({
				skipAccessControl: true
			}),
			query: `
				mutation createFeatureFlag($data: FeatureFlagCreateInput) {
					createFeatureFlag(data: $data) {
                        id
                        name
                        key
                        description
                        definitionOfDone
                        value
                        group
                        status
                    }
				}
			`,
			variables: {
				data: newFeatureFlag
			},
		});

		return res.data.createFeatureFlag

	} catch(err) {

		console.log("Error", err);
        
	}


}

module.exports = createFeatureFlag