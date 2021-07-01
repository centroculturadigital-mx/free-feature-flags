const createFeatureFlagGroup = require("./createFeatureFlagGroup")
const createFeatureFlag = require("./createFeatureFlag")

const seedFeatureFlags = async (keystone) => {
  
    const group = await createFeatureFlagGroup(keystone, {
      name: "Test Feature Flag Group",
      key: "TST_FF_GRP"
    })
  
    
    const flag = await createFeatureFlag(keystone, {
      name: "Test Feature Flag",
      key: "TST_FF",
      description: "...",
      definitionOfDone: "Removable anytime",
      value: true,
      group,
      status: "READY",
    })
  
  
}

  
module.exports = seedFeatureFlags