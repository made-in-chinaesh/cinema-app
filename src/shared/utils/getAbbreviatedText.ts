export const getAbbreviatedText = (text: string, length: number) => {
	if (text.length >= length) {
		const splitText = text.split('')

		const textArray = splitText.filter((item, index) => index + 1 <= length)

		return textArray.join('')
	}

	return text
}
