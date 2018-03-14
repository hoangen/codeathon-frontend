/*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/

/**
 * Helper prototype function for array to groupBy using a keyFunction
 * @param {*lambda function to transform the key} keyFunction 
 */
Array.prototype.groupBy = function(keyFunction) {
    var groups = {}
    this.forEach(function(el) {
        var key = keyFunction(el)
        if (key in groups === false) {
            groups[key] = []
        }
        groups[key].push(el)
    })
    return Object.keys(groups).map(function(key) {
        return {
            key: key,
            values: groups[key]
        }
    })
}

/**
 * Helper prototype function for array to flatMap using a lambda
 * @param {*lambda function to transform the key} lambda 
 */
Array.prototype.flatMap = function(lambda) { 
    return Array.prototype.concat.apply([], this.map(lambda)); 
}