const array = [1, 2, 3, 4, 5, 6, 7];

function arrEl(newArr, item) {
    let item = array.indexOf(5);
    while (item > -1) {
        array.splice(item, 1);
    }
return item;    
}
console.log(arrEl(array));

