var regexp = /^(C|A|P)[0-9]{4}(G|H|I|K|L|M)$/;
function tenlop(str) {

    if(regexp.test(str)){
        return true;
    } return false;
}
var a = "C1234H";
console.log(tenlop(a));
var b = "C123364H";
console.log(tenlop(b));
var c = "B123364H";
console.log(tenlop(c));
var d = "B1a364H";
console.log(tenlop(d));