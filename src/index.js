module.exports = function toReadable (number) {

let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
'ten'];
let b = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let c = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let result = '';

if (number == 0) {return 'zero'};

if (number <= 10) {return (a[number])};

if (number < 20) {return (b[number-10])};

if (number <100) {
    result = (c[Number(number.toString()[0])] + ' ' + a[Number(number.toString()[1])])
    return result.replace(/\s+/g, ' ').trim();
}

if (number <1000) {
    let n = +(number.toString().slice(1));
    if (n <= 10) {
        result = ((a[Number(number.toString()[0])] + ' hundred ' + a[n]))}
        else {
            if (n < 20) {
                result = ((a[Number(number.toString()[0])] + ' hundred ' + b[n-10]))}
                else {
                    result = ((a[Number(number.toString()[0])] + ' hundred ' + `${c[Number(n.toString()[0])]}` + ` ${a[Number(n.toString()[1])]}`))
                 }}
    return result.replace(/\s+/g, ' ').trim();

}
}



