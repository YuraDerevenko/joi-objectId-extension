const { Types: { ObjectId } } = require('mongoose');
const OBJECT_ID_REGEX = /^[0-9a-fA-F]{24}$/;

module.exports = {
  type: 'objectId',
  messages: {
    'objectId.base': 'needs to be a string of 12 bytes or a string of 24 hex characters',
  },
  coerce(value, helpers) {
    if (ObjectId.isValid(value) && OBJECT_ID_REGEX.test(value)) {
      return { value: ObjectId(value) };
    }

    if (!value) {
      return undefined;
    }

    return { value, errors: helpers.error('objectId.base') };
  },
};
