import fs from 'fs/promises'
import { DEFAULT_INPUT_FILE_PATH, DEFAULT_OUTPUT_FILE_PATH } from '../config/Constants'
import { translateSentence } from './TranslateSentence'

/** Translate a file, and create another file to output */
export async function translateFile(
    inputPath: string = DEFAULT_INPUT_FILE_PATH, 
    outputPath: string = DEFAULT_OUTPUT_FILE_PATH
    ) {
    const fileContent = await fs.readFile(inputPath)
    const sentences = fileContent.toLocaleString().split(/\r?\n/)

    const translatedSentences = sentences.map(translateSentence)
    const outputContent = translatedSentences.join('\n')

    await fs.writeFile(outputPath, outputContent)
}