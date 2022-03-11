const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStock: 17,
    },
    {
      idProduct: 'BOOK002352',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStock: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStock: 5,
    },
    {
      idProduct: 'BOOK002931',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andre Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStock: 56,
    },
  ];
  function getInfoPenjualan(dataPenjualan){
    let totalKeuntungan = 0
    let totalModal = 0
    let presentaseKeuntungan = 0
    let max = 0
    let produkTerlaris
    for(let i=0;i<dataPenjualan.length;i++){
      totalKeuntungan += dataPenjualan[i].hargaJual*dataPenjualan[i].totalTerjual;
      totalModal += dataPenjualan[i].hargaBeli * dataPenjualan[i].totalTerjual+dataPenjualan[i].sisaStock;
      if(dataPenjualan[i].totalTerjual > max){
        produkTerlaris = dataPenjualan[i].namaProduk
        max = dataPenjualan[i].totalTerjual
      }
    }
    presentaseKeuntungan += (totalKeuntungan - totalModal)/100;
     return {
       totalKeuntungan : totalKeuntungan,
       totalModal      : totalModal,
       presentaseKeuntungan : presentaseKeuntungan,
       produkBukuTeralris : produkTerlaris,
     }
  }
  
  console.log(getInfoPenjualan(dataPenjualanNovel))