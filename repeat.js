function repeat(str, n) {
    let count = 0;
    while (count <= n) {
        count++;
        str += str;
    }
    return str
}