export default class StringUtils {
    /**
     * To return an empty string
     */
    get Empty() {
        return ''
    }

    /**
     * Helper method to check if a given string is undefined, null or blank
     * @param {input string} input string to check empty
     */
    static isEmpty(input) {
        return input === undefined || input === null || input === '' || input ==='undefined'
    }

    /**
     * Helper method to check if a given string is NOT undefined, null or blank
     * @param {input string} input string to check empty
     */
    static isNotEmpty(input) {
        return !this.isEmpty(input)
    }

    /**
     * capitalize the first character of each word in a string
     * @param {*String} inputString input string
     */
    static capitalizeFirstCharacterOfEachWord(inputString) {
        return this.isEmpty(inputString)
            ? this.Empty
            : inputString.toLowerCase().replace(/(^|\s)[a-z]/g, function (f) {
                return f.toUpperCase()
            })
    }
}