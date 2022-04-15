import { ONLY_VOWEL_WORD_SUFFIX, VALID_VOWEL_REGEX, WORD_SUFFIX } from "../config/Constants"
import { verifyStringNumber } from "../utils/NumberStringVerifier"
import { verifyVowelOnlyWord } from "../utils/VowelOnlyWordVerifier"
import { verifyIfCharIsAVowel } from "../utils/VowelVerifier"

/**
 * A function that receives the prefix, stem and if the first letter needs 
 * to be capitalized
 * 
 * @returns {String} the translated word 
 */
function makeTranslatedWord(prefix: string, stem: string, capitalizeFirstLetter: boolean): string {
    const isVowelWord = verifyVowelOnlyWord(stem + prefix)
    
    // if the word contains only vowels use a different suffix
    const word = isVowelWord ?
        stem + ONLY_VOWEL_WORD_SUFFIX :
        stem + prefix + WORD_SUFFIX
        
    if(capitalizeFirstLetter) {
        const wordRest = word.substring(1, word.length)

        return word[0].toUpperCase() + wordRest
    }

    return word
}


/**
 * A function that finds the first vowel in a word and returns its
 * index or undefined if the word doesn't have a vowel
 * 
 * @returns {Number | undefined} the index number if the word has a vowel or undefined if it doesn't
 */
function findFirstVowelIndexInAWord(word: string): number | undefined {
    const wordChars = word.split('') 
    
    const firstVowelIndex = wordChars.findIndex(verifyIfCharIsAVowel)

    return firstVowelIndex
}



/** Translates a single word to Pig Latin */
export function translateWord(word: string) {
    // Does not translate if there's no word or if it is a number
    if(!word.length || verifyStringNumber(word)) return word
    
    // Getting some useful information about the given word
    const lowerCaseWord = word.toLowerCase()
    const firstVowelIndex = findFirstVowelIndexInAWord(lowerCaseWord)
    const isFirstLetterCapitalized = word[0].toUpperCase() === word[0]
    
    // Checks if there's no vowel in the word, then if true return the word with suffix only
    if(firstVowelIndex === undefined) {
        return makeTranslatedWord(word, '', isFirstLetterCapitalized)
    }

    // Getting the prefix and stem
    const prefix = lowerCaseWord.substring(0, firstVowelIndex)
    const stem = lowerCaseWord.substring(firstVowelIndex, word.length)
    
    return makeTranslatedWord(prefix, stem, isFirstLetterCapitalized)
}
