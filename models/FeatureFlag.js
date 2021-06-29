const { Text, Relationship, Select, Checkbox } = require('@keystonejs/fields');

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
    description: {
      type: Text,
      isRequired: true,    
    },
    definitionOfDone: {
      type: Text,
      isRequired: true,    
    },
    value: {
        type: Checkbox
    },
    group: {
        type: Relationship,
        ref: "FeatureFlagGroup.flags"
    },
    status: {
        type: Select,
        options: "IMPLEMENTATION_PENDING, READY, ACTIVE, REMOVAL_PENDING, REMOVED"
    }
  },
  
  plugins: [
    atTracking(),
  ],

  adminConfig: {
    defaultSort: 'createdAt',
  },

};
