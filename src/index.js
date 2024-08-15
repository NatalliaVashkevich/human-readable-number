module.exports = function toReadable(number) {
    let underTwentyDigit = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'  ];
    let tensDigit = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
    if (number === 0) {
        return 'zero';
    } else if (number > 0 && number < 20) {
        return underTwentyDigit[number];
    } else if (number >= 20 && number <= 99) {
      let str = number.toString();
       str.split('');
       let firstDigit = str[0];
       let secondDigit = str[1];
       let result = `${tensDigit[firstDigit-2]}${' '}${underTwentyDigit[secondDigit]}`;
       return result.trim();
    } else if (number > 99 && number < 1000) {
      let str = number.toString();
      str.split('');
       let firstDigit = str[0];
       let secondDigit = str[1];
       let thirdDigit = str[2];
       let lastDigits = +str.slice(-2);
      if (+secondDigit < 2) {
        let result = `${underTwentyDigit[firstDigit]}${' hundred '}${underTwentyDigit[lastDigits]}`;
        return result.trim();
      } else {
        let result = `${underTwentyDigit[firstDigit]}${' hundred '}${tensDigit[secondDigit-2]}${' '}${underTwentyDigit[thirdDigit]}`;
        return result.trim();
      }
      }
    }