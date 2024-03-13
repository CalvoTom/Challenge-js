function slice (str, startIndex, EndIndex = str.length){
    if (typeof str === "string"){
        let result = "";
        if((!EndIndex) || (EndIndex > str.length)) {
            for(let i = startIndex; i<str.length; i++) {
                result = result + str[i];
            }
        } else {
            for(let i = startIndex; i<EndIndex; i++) {
                result = result + str[i];
            }
        }
        return result;
    }else {
        let result = [];
        if ((!EndIndex) || (EndIndex > str.length)) {
            for (let i = startIndex; i < str.length; i++) {
                result.push(str[i]);
            }
        } else {
            for (let i = startIndex; i < EndIndex; i++) {
                result.push(str[i]);
            }
        }
        return result;
    }
}