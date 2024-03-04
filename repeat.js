function repeat(str, n) {
    let newstring = str;
    if (n != 0) {
        newstring += str;
        repeat(str, n-1)
    }
    newstring += str;
    return newstring
}