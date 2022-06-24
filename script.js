let a = [1,2,3, 'hello',4,5];
let b = [1,2,3, true, 4, undefined, 6];

function getSum(x) {
    let c = 0;
    for(let i = 0; i < x.length; i++) {
        if(typeof(x[i]) == `number`) {
            c += x[i];
        }
    }
    return c;
}

function getArray(x, y) {
    if(getSum(x) > getSum(y)) {
        return x;
    } else {
        return y;
    }
}

let s = getArray(a,b);
console.log(s);