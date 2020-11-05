import { Types } from 'mongoose'
import { Extension, CustomHelpers } from 'joi'
const OBJECT_ID_REGEX = /^[0-9a-fA-F]{24}$/

const joiObjectIdExtension: Extension = {
  type: 'objectId',
  messages: {
    'objectId.base': 'Should be proper objectId format',
    'objectId.empty': 'Empty value is not objectId'
  },
  coerce(value: string, helpers: CustomHelpers) {
    if (Types.ObjectId.isValid(value) && OBJECT_ID_REGEX.test(value)) {
      return { value: Types.ObjectId(value) }
    }

    if (!value) {
      return { value, errors: [ helpers.error('objectId.empty') ] }
    }

    return { value, errors: [ helpers.error('objectId.base') ] }
  }
}

export default joiObjectIdExtension