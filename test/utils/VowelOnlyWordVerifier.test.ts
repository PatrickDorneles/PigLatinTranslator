import { verifyVowelOnlyWord } from "../../src/utils/VowelOnlyWordVerifier"

describe('VowelOnlyWordVerifier', () => {
    it('should return true if the word has only vowels', () => {
        const word = 'I'

        const result = verifyVowelOnlyWord(word)

        expect(result).toBe(true)
    })

    
    it('should return false if the word has consonants', () => {
        const word = 'car'

        const result = verifyVowelOnlyWord(word)

        expect(result).toBe(false)
    })
})