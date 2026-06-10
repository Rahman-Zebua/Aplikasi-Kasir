let total = 0;

function buatProduk() {

  let nama =
    document.getElementById("namaProduk").value;

  let harga =
    document.getElementById("hargaProduk").value;

  if (nama == "" || harga == "") {

    alert("Isi nama dan harga!");

    return;
  }

  harga = parseInt(harga);

  let tombol =
    document.createElement("button");

  tombol.innerHTML =
    nama + " - Rp" + harga;

  tombol.onclick = function () {

    tambahKeKeranjang(nama, harga);
  };

  document
    .getElementById("daftarProduk")
    .appendChild(tombol);

  document.getElementById("namaProduk").value = "";

  document.getElementById("hargaProduk").value = "";
}

function tambahKeKeranjang(nama, harga) {

  let li =
    document.createElement("li");

  li.innerHTML =
    nama + " - Rp" + harga +
    ' <button onclick="hapusItem(this,' + harga + ')">Hapus</button>';

  document
    .getElementById("keranjang")
    .appendChild(li);

  total += harga;

  document.getElementById("total").innerHTML =
    "Total: Rp" + total;
}

function hapusItem(button, harga) {

  button.parentElement.remove();

  total -= harga;

  document.getElementById("total").innerHTML =
    "Total: Rp" + total;
}

function hitungKembalian() {

  let bayar =
    document.getElementById("bayar").value;

  bayar = parseInt(bayar);

  let kembali = bayar - total;

  document.getElementById("kembalian").innerHTML =
    "Kembalian: Rp" + kembali;
}

function resetKasir() {

  document.getElementById("keranjang").innerHTML = "";

  total = 0;

  document.getElementById("total").innerHTML =
    "Total: Rp0";

  document.getElementById("kembalian").innerHTML =
    "Kembalian: Rp0";

  document.getElementById("bayar").value = "";
}

function cetakStruk() {

  window.print();
}
```
