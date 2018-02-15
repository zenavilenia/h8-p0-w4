/*

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

*/

function changeVocals (str) {
  //code di sini
  var kalimatBaru = "";
  for(var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) === 65 || str.charCodeAt(i) === 69 || str.charCodeAt(i) === 73 ||
    str.charCodeAt(i) === 79 || str.charCodeAt(i) === 85 || str.charCodeAt(i) === 97 ||
    str.charCodeAt(i) === 101 || str.charCodeAt(i) === 105 || str.charCodeAt(i) === 111 ||
    str.charCodeAt(i) === 117) {
      kalimatBaru += String.fromCharCode(str.charCodeAt(i) + 1);
    } else {
      kalimatBaru += str[i];
    }
  }

  return kalimatBaru;
}

function reverseWord (str) {
  //code di sini
  var kalimatBaru = "";

  for(var i = str.length-1; i >= 0; i--) {
    kalimatBaru += str[i];
  }

  return kalimatBaru;
}

function setLowerUpperCase (str) {
  //code di sini
  var kalimatBaru = '';
  for(var i = 0; i < str.length; i++) {
    if(str[i].toLowerCase() === str[i]) {
      kalimatBaru += str[i].toUpperCase();
    } else {
      kalimatBaru += str[i].toLowerCase();
    }
  }

  return kalimatBaru;
}

function removeSpaces (str) {
  //code di sini
  var kalimatBaru = '';
  for(var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) !== 32) {
      kalimatBaru+=str[i];
    }
  }

  return kalimatBaru;
}

function passwordGenerator (name) {
  if(name.length <= 4) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }

  var change = changeVocals(name);
  var reverse = reverseWord(change);
  var setCase = setLowerUpperCase(reverse);
  var spaces = removeSpaces(setCase);
  return spaces;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
