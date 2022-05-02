const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let result = 0,
        numdigit = [];
    while (n) {
        numdigit.push(n % 10);
        n = Math.floor(n / 10);
    }
    for (let index_n = 0; index_n < numdigit.length; index_n++) {
        let j = 0;
        for (let i = numdigit.length - 1; i >= 0; i--) {
            if (i !== index_n) {
                j = j * 10 + numdigit[i];
            }
        }
        result = Math.max(j, result);
    }
    return result;
}

module.exports = {
  deleteDigit
};
