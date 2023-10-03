module.exports = function towelSort (matrix) {
    const result = [];

    if (matrix === [] || matrix === undefined) {
        return result;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            result.push(...matrix[i]);
        } else {
            result.push(...matrix[i].reverse());
        }
    }
  return result;
}
