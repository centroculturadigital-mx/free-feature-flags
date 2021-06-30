const FeatureFlag = require("./models/FeatureFlag")
const FeatureFlagGroup = require("./models/FeatureFlagGroup")


const freeFeatureFlags = keystone => {

    keystone.createList('FeatureFlag', FeatureFlag);
    keystone.createList('FeatureFlagGroup', FeatureFlagGroup);

}


module.exports = freeFeatureFlags