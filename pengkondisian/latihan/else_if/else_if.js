var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log ('Angkot no. ' + noAngkot + 'beroperasi dengan baik')
  } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
    console.log ('Angkot no. ' + noAngkot + 'sedang lembur')
  } else {
    console.log ('Angkot no. ' + noAngkot + 'tidak beroperasi dengan baik')
  }
}