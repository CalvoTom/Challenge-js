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
    const sign = Math.sign(a);
    let result = Math.abs(a);
    let n = 0;
    while (result - b >= 0){
        result -= b;
        n++;
    }
    if (sign === -1){
        return -n;
    }else{
        return  n;
    }
}

function modulo (a,b){
    let result = Math.abs(a);
    let n = 0;
    while (result - b >= 0){
        result -= b;
        n++;
    }
    return result;
}