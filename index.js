const FeatureFlag = require("./models/FeatureFlag")
const FeatureFlagGroup = require("./models/FeatureFlagGroup")

const addFlags = require("./functions/addFlags")
const createFeatureFlag = require("./functions/createFeatureFlag")
const createFeatureFlagGroup = require("./functions/createFeatureFlagGroup")
const seed = require("./functions/seed-test")


const freeFeatureFlags = keystone => {

    keystone.createList('FeatureFlag', FeatureFlag);
    keystone.createList('FeatureFlagGroup', FeatureFlagGroup);

}


module.exports = {
    freeFeatureFlags,
    addFlags,
    createFeatureFlag,
    createFeatureFlagGroup,
    seed
}