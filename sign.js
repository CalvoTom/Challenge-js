const sign = (n) => {
    if (n > 0) {
        return 1
    } else if (n < 0) {
        return -1
    }else {
        return 0
    }
}
const sameSign = (n1,n2) =>{
    if (sign(n1) == sign(n2)){
        return true
    }else{
        false
    }
}
