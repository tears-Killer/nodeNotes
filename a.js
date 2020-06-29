const add = (n1, n2) => n1 + n2
const num = 10

exports.num = num
exports.add  = add
// 以module.exports暴露的为标准
module.exports = {
    num: 99
}