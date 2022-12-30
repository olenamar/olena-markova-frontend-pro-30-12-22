const array = [1, 2, 3, 4, 5, 6, 7];

function arrayItem(array, item) {
    item = array.indexOf(5);
    if(item > -1) {
        array.splice(item, 1);
    }
    return array;    
}

console.log(arrayItem(array));