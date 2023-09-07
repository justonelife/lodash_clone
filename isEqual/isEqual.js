/**
 * @description
 * Performs a deep comparison between two values to determine if they are equivalent.

Note: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. ===.
 */
function isEqual(a, b) {
    //scope: deep compare 2 object
    //TODO: full scope
    return twoObjectsAreEqual(a, b);
}
function twoObjectsAreEqual(a, b) {
    if (!twoArraysAreEqual(Object.keys(a), Object.keys(b))) {
        return false;
    }
    for (var key in a) {
        if (a[key] instanceof Array && b[key] instanceof Array) {
            if (!twoArraysAreEqual(a[key], b[key])) {
                return false;
            }
        }
        else if (a[key] instanceof Object && b[key] instanceof Object) {
            if (!twoObjectsAreEqual(a[key], b[key])) {
                return false;
            }
        }
        else if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function twoArraysAreEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    // assume a, b have same order
    for (var i = 0; i < a.length; i++) {
        if (a[i] instanceof Array && b[i] instanceof Array) {
            if (!twoArraysAreEqual(a[i], b[i])) {
                return false;
            }
        }
        else if (a[i] instanceof Object && b[i] instanceof Object) {
            if (!twoObjectsAreEqual(a[i], b[i])) {
                return false;
            }
        }
        else if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
var person1 = {
    name: 'john',
    age: 30,
    addresses: ['HCM', 'HaNoi', { street: 'CMT8', district: '1' }],
    married: false
};
var person2 = {
    name: 'john',
    age: 30,
    addresses: ['HCM', 'HaNoi', { street: 'CMT8', district: '2' }],
    married: false
};
var person3 = {
    name: 'john',
    age: 30,
    addresses: ['HCM', 'HaNoi', { street: 'CMT8', district: '1' }],
    married: false
};
console.log('expect person1 !== person2 and person1 === person3');
console.log('person1 === person2', isEqual(person1, person2));
console.log('person1 === person3', isEqual(person1, person3));
