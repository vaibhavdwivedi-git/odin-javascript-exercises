const removeFromArray = function (...args) {
    arr = args[0];

    for (let j = 1; j < args.length; j++) {
        x = args[j];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === x) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;

