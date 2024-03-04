function repeat(str, n) {
    let newstring = "";
    let count = 0;
    while (count < n) {
        count++;
        newstring = newstring + str;
    }
    return newstring
}