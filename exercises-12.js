function shoppingTime(memberId, money) {
  // you can only write your code here!
  if(!memberId){
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }

  if(money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }

  var barang = [
      {
        namaBarang: "Sepatu Stacattu",
        harga: 1500000
      },
      {
        namaBarang: "Baju Zoro",
        harga: 500000
      },
      {
        namaBarang: "Baju H&N",
        harga: 250000
      },
      {
        namaBarang: "Sweater Uniklooh",
        harga: 175000
      },
      {
        namaBarang: "Casing Handphone",
        harga: 50000
      },
    ];

  var hasil = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: money
  };

  for(var i = 0; i < barang.length; i++) {
    if(hasil.changeMoney >= barang[i].harga) {
      hasil.listPurchased.push(barang[i].namaBarang);
      hasil.changeMoney-=barang[i].harga;
    }
  }
  return hasil;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 4475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
