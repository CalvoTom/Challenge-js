function reverse(str){
    if (typeof str === "string"){
        let newStr = "";
        for (let i = str.length-1; i >= 0; i--){
            newStr += str[i];
        }
        return newStr;
    }else{
        let newStr = [];
        for (let i = str.length-1; i >= 0; i--){
            newStr.push(str[i]);
        }
        return newStr;
    }
}