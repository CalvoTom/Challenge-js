function indexOf(array, value, index = 0){
    for (let i = index; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}
function lastIndexOf(array, value, index = 0){
    let lastIndex = -1;
    for (let i = index; i < array.length; i++){
        if (array[i] === value){
            lastIndex = i;
        }
    }
    return lastIndex;
}
function includes(array, value){
    for (let i of array){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}

console.log(indexOf([0,3,1,4,3],3,2));
console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2));
console.log(includes([0,1,4,3],4));
