import { first } from '../../utils/array'

describe('Array Utilities', () => {
  describe('first()', () => {
    describe('When we pass in good parameters', () => {
      it('should return the first element', () => {
        let array = [1, 2, 3, 4, 5]
        expect(first(array)).eql(1)
      })
      it('should return the first n elements', () => {
        expect(first([1, 2, 3], 2)).eql([1, 2])
      })
    })
    describe('When we pass in bad parameters', () => {
      it('should throw an error if the first parameter is not an array', () => {
        expect(first('not an array')).to.throw(Error)
      })
      it('should throw an error if the second parameter is not a number', () => {
        expect(first([1, 2, 3], 'not a number')).to.throw(Error)
      })
    })
  })
})
