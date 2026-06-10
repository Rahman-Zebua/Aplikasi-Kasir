alert("script jalan");

let total = 0;

function buatProduk() {

  const nama = document.getElementById("namaProduk").value;

  const harga = document.getElementById("hargaProduk").value;

  if (nama === "" || harga === "") {
    alert("Isi nama dan harga!");
    return;
  }

  const tombol = document.createElement("button");

  tombol.innerHTML = nama + " - Rp" + harga;

  tombol.onclick = function () {
    tambahKeKeranjang(nama, parseInt(harga));
  };

  document.getElementById("daftarProduk").appendChild(tombol);

  document.getElementById("namaProduk").value = "";

  document.getElementById("hargaProduk").value = "";
}

function tambahKeKeranjang(nama, harga) {

  total = total + harga;

  const item = document.createElement("p");

  item.innerHTML = nama + " - Rp" + harga;

  document.getElementById("keranjang").appendChild(item);

  document.getElementById("total").innerHTML =
    "Total: Rp" + total;
}

function hitungKembalian() {

  const bayar =
    parseInt(document.getElementById("bayar").value);

  const kembali = bayar - total;

  document.getElementById("kembalian").innerHTML =
    "Kembalian: Rp" + kembali;
}

function resetKasir() {

  total = 0;

  document.getElementById("keranjang").innerHTML = "";

  document.getElementById("total").innerHTML =
    "Total: Rp0";

  document.getElementById("kembalian").innerHTML =
    "Kembalian: Rp0";

  document.getElementById("bayar").value = "";
}

function cetakStruk() {
  window.print();
}
