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