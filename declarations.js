const escapeStr = "`, \\, /, \" '";
const arr = [4, '2'];
const obj = {str: "string", num: 27, bool: true, undef: undefined};
const nested= {arr: [4, undefined, '2'], obj: {str: "string", num: 27, bool: true}};
Object.freeze(obj,arr,nested);