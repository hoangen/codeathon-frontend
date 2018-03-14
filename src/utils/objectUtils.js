export default class ObjectUtils {
    /**
     * Helper method to check if a given object is undefined, null or blank
     * @param {input object} input object to check undefined or null
     */
    static isEmpty(input) {
        return input === undefined || input === null
    }

    /**
     * Helper method to check if a given string is NOT undefined, null or blank
     * @param {input object} input object to check undifined or null
     */
    static isNotEmpty(input) {
        return !this.isEmpty(input)
    }
}