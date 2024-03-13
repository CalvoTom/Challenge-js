function slice (str, startIndex, EndIndex = str.length){
    let result = [];
    if((!EndIndex) || (EndIndex > str.length)) {
        for(let i = startIndex; i<str.length; i++) {
            result.push(str[i]);}
    } else {
        for(let i = startIndex; i<EndIndex; i++) {
            result.push(str[i]);
        }
    }
    return result;
}