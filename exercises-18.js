function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if(angka.toString().length === 1) {
    return angka;
  }

  angka = angka.toString().split('');
  var angkaBaru = 1;
  for(var i = 0; i < angka.length; i++) {
    angkaBaru*=angka[i];
  }
  
  return kaliTerusRekursif(angkaBaru);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
