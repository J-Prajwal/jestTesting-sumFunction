// function sum(a, b) {
//   return a + b;
// }

function sum(...args) {
    if(args.length===0) {
        return "Sum invoked with no arguments";
    } else if(args.length===1) {
        return "Sum function needs atleast 2 arguments";
    }

    const sumValues = [...args].reduce((a, c) => a + Number(c), 0);
    return Number(sumValues.toFixed(1));
}

module.exports = sum;