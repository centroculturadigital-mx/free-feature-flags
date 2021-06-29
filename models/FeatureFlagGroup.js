const { Text, Relationship, Select } = require('@keystonejs/fields');

const { atTracking } = require('@keystonejs/list-plugins');

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,    
    },
    key: {
      type: Text,
      isRequired: true,    
    },
    flags: {
        type: Relationship,
        ref: "FeatureFlag.group",
        many: true
    }
  },
  
  plugins: [
    atTracking(),
  ],

  adminConfig: {
    defaultSort: 'createdAt',
  },

};
