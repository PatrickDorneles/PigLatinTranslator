import { translateSentence } from "../../src/translators/TranslateSentence"

describe('TranslateSentence', () => {
    it('should translate correctly a simple sentence', () => {
        const sentence = "Hello sir"
        const expected = "Ellohay irsay"

        const result = translateSentence(sentence)

        expect(result).toBe(expected)
    })

    it('should translate a complex sentence with punctuation', () => {
        const sentence = "Hey sir, check out this awesome sentence! Cool, don't you think?"
        const expected = "Eyhay irsay, eckchay outay isthay awesomeay entencesay! Oolcay, on'tday youyay inkthay?"

        const result = translateSentence(sentence)

        expect(result).toBe(expected)
    })

    it('should translate a sentence with only punctuations without affecting the order', () => {
        const sentence = "!???!!\"!\"??()"

        const result = translateSentence(sentence)

        expect(result).toBe(sentence)
    })
})