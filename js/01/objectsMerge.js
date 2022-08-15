/* // easy to understand, a bit long
const objectsMerge = (...objects) => 
{
    let result = {}
    objects.forEach((obj, index) => result[index] = obj)
    return result
}
*/

/* // use reduce to add values to the empty object
const objectsMerge = (...objects) => 
    objects.reduce((prev, curr, index) => {prev[index]=curr ; return prev;}, {})
*/

// even shorter, a bit hard to read, does exactly the same the previous one did
const objectsMerge = (...o) => o.reduce((p, c, i) => ({...p, ...{[i]: c}}), {})

export default objectsMerge;
