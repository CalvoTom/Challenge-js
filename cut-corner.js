function round(num) {
    return Math.sign(num) * Math.round(Math.abs(num));
}

function ceil(num) {
    return Math.sign(num) * Math.ceil(Math.abs(num));
}

function floor(num) {
    return Math.sign(num) * Math.floor(Math.abs(num));
}

function trunc(num) {
    return Math.sign(num) * Math.trunc(Math.abs(num));
}
