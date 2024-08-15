module.exports = function toReadable(number) {
    let oneDigit = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    let teenDigit = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
    let tensDigit = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninenty' ];
    if (number === 0) {
        return 'zero'
    } else if (number > 0 && number < 10) {
        return oneDigit[number - 1];
    } else if (number >= 10 && number < 20) {
    return teenDigit[number - 10];
  }
}