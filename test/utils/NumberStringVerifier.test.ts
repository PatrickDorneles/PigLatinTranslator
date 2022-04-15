import { verifyStringNumber } from "../../src/utils/NumberStringVerifier"

describe('NumberStringVerifier', () => {

    it('should return true if string has a number', () => {
        const str = '4'

        const result = verifyStringNumber(str)
        
        expect(result).toBe(true)
    })

    it('should return false if string dont have a number',() => {
        const str = 'a'

        const result = verifyStringNumber(str)

        expect(result).toBe(false)
    })
})