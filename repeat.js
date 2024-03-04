function repeat(n, str) {
    let count = 0;
    while (count <= n) {
        count++;
        str += str;
    }
    return str
}