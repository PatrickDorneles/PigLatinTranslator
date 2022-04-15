/**
 * A function that verifies if the word is a number string, if so return true
 */
export function verifyStringNumber(str: string) {
    const numberWord = Number(str)
    return !Number.isNaN(numberWord)
}
