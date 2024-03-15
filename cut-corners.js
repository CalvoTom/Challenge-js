function round(number){
    if (number > 0){
        if (Math.abs(modulo(number, 1)) < 0.5){
            return number - modulo(number, 1)
        } else {
            return number - modulo(number, 1) + 1
        }
    } else {
        if (Math.abs(modulo(number, 1)) < 0.5){
            return number - modulo(number, 1)
        } else {
            return number - modulo(number, 1) - 1
        }
    }
}
function ceil(number){
    if (number > round(number)){
        return round(number) + 1
    } else {
        return round(number)
    }
}
function floor(number){
    if (number === 0){
        return 0
    }
    if (number > round(number)){
        return round(number)
    } else {
        return round(number) -1
    }
}
function trunc(number){
    if (number > 0xfffffffff){
        return number - (number-0xfffffffff);
    }
    if (number > 0){
        return ceil(number)-1
    } else {
        return ceil(number)
    }
}

function multiply (a,b){
    const sign = Math.sign(b);
    let result = 0;
    for (let i= 0; i < Math.abs(b); i++){
        result += a;
    }
    if (sign === -1){
        return -result;
    }else{
        return  result;
    }
}

function divide (a,b){
    let sign = Math.sign(a);
    let rest = Math.abs(a);
    let n = 0;
    while (rest - Math.abs(b) >= 0){
        rest -= Math.abs(b);
        n++;
    }
    if (sign === -1 && Math.sign(b) === -1) {
        return n;
    }else if (sign === -1 || Math.sign(b) === -1){
        return -n;
    }else{
        return  n;
    }
}

function modulo (a,b){
    return a - multiply(b, divide(a,b));
}