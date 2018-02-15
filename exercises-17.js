function totalDigitRekursif(angka) {
  // you can only write your code here!
  if(angka.toString().length === 1) {
    return angka;
  }

  angka = angka.toString().split('');
  var angkaTerakhir = parseInt(angka[angka.length-1]);
  angka.pop();

  return angkaTerakhir + totalDigitRekursif(parseInt(angka.join('')));
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
