function indexOf(array, value, index = 0){
    for (let i = index; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}
function lastIndexOf(array, value, index = array.length-1){
    for (let i = index; i >= 0; i--){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}
function includes(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
}

console.log(indexOf([0,3,1,4,3],3,2));
console.log(lastIndexOf(['t',1,4,'t'],'t', 2));
console.log(includes([0, 0, 't', 't'], 't'));
