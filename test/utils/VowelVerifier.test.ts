import { verifyIfCharIsAVowel } from "../../src/utils/VowelVerifier"

describe('VowelVerifier', () => {
    it('should return true to vowel "a"', () => {
        const letter = 'a'

        const result = verifyIfCharIsAVowel(letter)

        expect(result).toBe(true)
    })

    it('should return false to the letter "b"', () => {
        
        const letter = 'b'

        const result = verifyIfCharIsAVowel(letter)

        expect(result).toBe(false)
    })

    it('should return false to the number string "4"', () => {
        
        const char = '4'

        const result = verifyIfCharIsAVowel(char)

        expect(result).toBe(false)
    })

    it('should return false if the string has more than one character', () => {
        const str = 'aaa'

        const result = verifyIfCharIsAVowel(str)

        expect(result).toBe(false)
    })
})