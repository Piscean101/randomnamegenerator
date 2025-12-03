import {boyName, girlName, RandomName} from './name.js';
let queue = [];

let selector = boyName.filter((e) => {
        return e[1] == 'e' && e[4] == 'r';
    })

let random = (array, sample = 5) => {
    let result = [];
    while (sample) {
        let name = RandomName(array);
        if (!result.includes(name)) {
            result.push(name);
            sample--;
        }
    }
    return result;
}

console.log(random(girlName, 6));

let namelength = (arr,n) => arr.filter((e) => {
    return e.length == n;
});

console.log(namelength(boyName,8));