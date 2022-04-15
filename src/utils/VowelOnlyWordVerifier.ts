import { verifyIfCharIsAVowel } from "./VowelVerifier"

/**
 * A function that verifies if there's only vowels in a word
 */
export function verifyVowelOnlyWord(word: string) {
    const chars = word.split('')

    return chars.reduce((acc, char) => acc && verifyIfCharIsAVowel(char), true)
}