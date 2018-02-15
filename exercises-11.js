function changeMe(arr) {
  // you can only write your code here!
  var output = '';
  if(arr.length === 0){
    console.log("");
  }
  else {
    for(var i = 0; i < arr.length; i++) {
      var umur = 2018 - arr[i][3];
      if(isNaN(umur)) {
        umur = "Invalid Birth Year";
      }
      var hasil = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: umur
      }
      console.log(i+1 + ". " + hasil.firstName + " "+ hasil.lastName + ":");
      console.log(hasil);
    }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
