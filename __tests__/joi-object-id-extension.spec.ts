import { extend, ValidationError, attempt } from 'joi'
import { Types } from 'mongoose'
import JoiObjectIdExtension from '../src'

describe('joi-object-id extension', () => {
  let customJoi: any
  beforeAll(async () => {
    customJoi = extend(JoiObjectIdExtension)
  });

  it('should extend ', async () => {
    expect(customJoi).toHaveProperty('objectId')
  })

  it('should fail with empty value', async () => {
    try {
      attempt('', customJoi.objectId())
    } catch(ex) {
      expect(ex).toBeInstanceOf(ValidationError)
      expect(ex).toHaveProperty('message', 'Empty value is not objectId')
      expect(ex).toHaveProperty('details')
    }
  })

  it('should fail with 12 chars length', async () => {
    try {
      attempt(Array(12).fill('a').join(''), customJoi.objectId())
    } catch(ex) {
      expect(ex).toBeInstanceOf(ValidationError)
      expect(ex).toHaveProperty('message', 'Should be proper objectId format')
      expect(ex).toHaveProperty('details')
    }
  })

  it('should fail with 24 chars length', async () => {
    try {
      attempt(Array(24).fill('a').join(''), customJoi.objectId())
    } catch(ex) {
      expect(ex).toBeInstanceOf(ValidationError)
      expect(ex).toHaveProperty('message', 'Should be proper objectId format')
      expect(ex).toHaveProperty('details')
    }
  })

  it('should pass validation', async () => {
    const objectId = Types.ObjectId()
    const result = attempt(objectId, customJoi.objectId())

    expect(result).toBe(objectId)
  })
})
