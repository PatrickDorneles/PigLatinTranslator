import { translateWord } from "../../src/translators/TranslateWord"

describe('TranslateWord', () => {
    it('should translate correctly the word "Hello"', () => {
        const word = 'Hey'
        const expected = 'Eyhay'

        const translation = translateWord(word)

        expect(translation).toBe(expected)
    })

    it('should not translate a number string passed to it', () => {
        const word = '14'

        const translation = translateWord(word)

        expect(translation).toBe(word)
    })
})