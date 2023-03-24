"use strict";
const Boxstrings = {
    contents: ['ali', 'mohammad']
};
const Boxstring = {
    contents: 'string1'
};
const BoxNumbers = {
    contents: [1, 3]
};
const identity = (x) => x;
const randomElement = (xs, ya) => {
    const randomIndex = Math.floor(Math.random() * xs.length);
    if (ya) {
        return ya[randomIndex];
    }
    return xs[randomIndex];
};
const a = randomElement(['1', 2, 'hello']);
const b = randomElement([true, 'false']);
console.log(a, b);
//# sourceMappingURL=generic.js.map