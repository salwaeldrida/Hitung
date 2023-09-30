// hitung.js

// Fungsi untuk menghitung luas persegi
function LuasPersegi(sisi) {
    return sisi * sisi;
  }
  
  // Fungsi untuk menghitung keliling persegi
  function KelilingPersegi(sisi) {
    return 4 * sisi;
  }
  
  // Fungsi untuk menghitung luas persegi panjang
  function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
  }
  
  // Fungsi untuk menghitung keliling persegi panjang
  function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
  }
  
  // Ekspor fungsi-fungsi ini agar dapat digunakan di modul lain
  module.exports = {
    LuasPersegi,
    KelilingPersegi,
    luasPersegiPanjang,
    kelilingPersegiPanjang,
  };