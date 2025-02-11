is.num = (value) => {
        return typeof value === 'number';
    };
is.nan = (value) =>{
        return Number.isNaN(value);
    };
is.str = (value) => {
        return typeof value === 'string';
    };
is.bool= (value) => {
        return typeof value === 'boolean';
    };
is.undef= (value) => {
        return typeof value === 'undefined';
    };
is.def= (value) => {
        return typeof value !== 'undefined';
    };
is.arr= (value) => {
        return Array.isArray(value);
    };
is.obj = (value) => {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
    };
is.fun= (value) => {
        return typeof value === 'function';
    };
is.truthy= (value) => {
        return Boolean(value);
    };
is.falsy= (value) => {
        return !Boolean(value);
    };
