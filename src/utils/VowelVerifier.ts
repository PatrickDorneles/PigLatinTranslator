import { VALID_VOWEL_REGEX } from "../config/Constants";

/**
 * Verifies if the char is one of the valid vowels
 */
export function verifyIfCharIsAVowel(char: string) {
    if(char.length > 1) return false

    return VALID_VOWEL_REGEX.test(char.toLowerCase())
}
