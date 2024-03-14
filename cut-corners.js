function round(num) {
    if (isDecimal(num) === false){
        return num;
    }else {
        return num.toFixed(0);
    }
}

function ceil(num){
    let nb = 0;
    if (isDecimal(num)===false){
        return num ;
    }else{
        nb = parseInt(num);
        if (nb < num){
            return nb + 1;
        }else{
            return nb;
        }
    }
}

function floor(num){
    let nb = 0;
    if (isDecimal(num)===false){
        return num ;
    }else{
        nb = parseInt(num);
        if (nb > num){
            return nb - 1;
        }else{
            return nb;
        }
    }
}
function trunc(num){
    let nb = 0;
    if (isDecimal(num)===false){
        return num ;
    }else{
        nb = parseInt(num);
        if (nb > num){
            return nb - 1;
        }else{
            return nb;
        }
    }
}
function isDecimal(num) {
    return (num ^ 0) !== num;
}
