import { WORD_SEPARATORS_REGEX } from "../config/Constants"
import { translateWord } from "./TranslateWord"

/** Translate a complex sentence to Pig Latin */
export function translateSentence(sentence: string) {
    // get the words and their translations from the sentence
    const words = sentence.split(WORD_SEPARATORS_REGEX)
    const translatedWords = words.map(translateWord)

    // Reduce the original sentence, replacing each of the
    // original words with their translations
    return words.reduce((accumulator, word, wordIndex) => {
        return accumulator.replace(word, translatedWords[wordIndex])
    }, sentence)
}