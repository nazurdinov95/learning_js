let numeral = parseInt(document.getElementById('text-input').value);

const numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
  ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
  ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];        // Hundreds

function convert(num) {
  numeral = "";
  let digits = num.toString().split('').reverse();
  for (let i=0; i < digits.length; i++){
    numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
  }
  return numeral;
}

document.getElementById('text-output').value = convert(numeral);