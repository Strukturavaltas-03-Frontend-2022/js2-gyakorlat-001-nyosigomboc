
const flatten = (...strArr) => strArr.flat(Infinity)

const uniq = arr => arr.reduce((prev, curr) => prev.includes(curr)?prev:[...prev, curr], [])

const arrTrim = arr => arr.flatMap(s => s.trim())

const exclude = (char, arr) => arr.filter(x => !x.includes(char))

const concatArrays = (char, ...strArr) => arrTrim(exclude(char, uniq(flatten(strArr))))

export default concatArrays
