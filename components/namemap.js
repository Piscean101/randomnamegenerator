import { analytics, boyName, girlName, lastName, RandomNumber, Sample } from "./name.js";


// const sample = new Sample(boyName, 25).returnArray.concat(new Sample(girlName, 25).returnArray);

const firstNames = boyName.concat(girlName);

const library = boyName.concat(girlName, lastName);

const [namemap, lengthmap] = [new Map, new Map];

let iterable = [];

function populateMap (map, arr) {
    arr.forEach(e => {
        let firstLetter = e[0];
        map.has(firstLetter) ? map.get(firstLetter).push(e) : map.set(firstLetter, [e]);
    })
}

function maximumLengthMap (arr) {
    const f = arr.filter(e => {
        return e[1] == Math.max(...iterable)
    });
    console.log("Highest Count =>", f);
    return f;
}

function minimumLengthMap (arr) {
    const f = arr.filter(e => {
        return e[1] == Math.min(...iterable)
    })
    console.log("Lowest Count =>", f);
    return f;
}

populateMap(namemap, firstNames.sort());


for (const [key, value] of namemap.entries()) {
    lengthmap.set(key, value.length);
    namemap.get(key).push(value.length);
    // iterable.push(value[value.length-1]); SAME CODE AS NEXT LINE
    iterable.push(value.slice(-1));
}

let lmpe = [...lengthmap.entries()];

// console.log(namemap, lengthmap)

// maximumLengthMap(lmpe);
// minimumLengthMap(lmpe);

// console.log(library)

analytics();

