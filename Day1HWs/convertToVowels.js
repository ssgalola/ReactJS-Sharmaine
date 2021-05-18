function convertToVowels(stringInput){
    const stringInputArray = stringInput.toLowerCase().split('')
    var vowelsArray = []

    stringInputArray.forEach(character => {
        const isEqualToA = character === `a`
        const isEqualToE = character === `e`
        const isEqualToI = character === `i`
        const isEqualToO = character === `o`
        const isEqualToU = character === `u`

        if (isEqualToA || isEqualToE || isEqualToI || isEqualToO || isEqualToU){
            vowelsArray.push(character)
            return
        }
    });

    const stringVowelsOnly = vowelsArray.join('')
    return stringVowelsOnly
}

const word = `thisissomeword`
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels)

const words = `No game no life`
const wordsWithOnlyVowels = convertToVowels(words)
console.log(wordsWithOnlyVowels)