"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the given `str` but with the first
 * character capitalized.
 *
 * @param str String to transform.
 *
 * @return Transformed string.
 */
exports.capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.default = {
    capitalize: exports.capitalize
};
//# sourceMappingURL=index.js.map