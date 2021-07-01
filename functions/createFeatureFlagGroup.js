const createFeatureFlagGroup = async (keystone, {
    name,
    key,
}) => {


    let newFeatureFlagGroup
		
    newFeatureFlagGroup = {
        name,
        key,
    }


	try {
		const res = await keystone.executeGraphQL({
			context: keystone.createContext({
				skipAccessControl: true
			}),
			query: `
				mutation createFeatureFlagGroup($data: FeatureFlagCreateInput) {
					createFeatureFlagGroup(data: $data) {
                        id
                        name
                        key
                    }
				}
			`,
			variables: {
				data: newFeatureFlagGroup
			},
		});

		return res.data.createFeatureFlagGroup

	} catch(err) {
		
        console.log("Error", err);

	}


}

module.exports = createFeatureFlagGroup