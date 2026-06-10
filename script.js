let total = 0;

let isiStruk = "";

function formatRupiah(angka) {

  return angka.toLocaleString("id-ID");
}

function buatProduk() {

  const nama =
    document.getElementById("namaProduk").value;

  const harga =
    document.getElementById("hargaProduk").value;

  if (nama === "" || harga === "") {

    alert("Isi nama dan harga!");

    return;
  }

  const tombol = document.createElement("button");

  tombol.innerHTML =
    nama + " - Rp" + formatRupiah(parseInt(harga));

  tombol.onclick = function () {

    tambahKeKeranjang(
      nama,
      parseInt(harga)
    );
  };

  document
    .getElementById("daftarProduk")
    .appendChild(tombol);

  document.getElementById("namaProduk").value = "";

  document.getElementById("hargaProduk").value = "";
}

function tambahKeKeranjang(nama, harga) {

  total += harga;

  const item = document.createElement("p");

  item.innerHTML =
    nama + " - Rp" + formatRupiah(harga);

  document
    .getElementById("keranjang")
    .appendChild(item);

  document.getElementById("total").innerHTML =
    "Total: Rp" + formatRupiah(total);

  isiStruk += `
    <p>
      ${nama}
      <br>
      Rp${formatRupiah(harga)}
    </p>
  `;

  document.getElementById("isiStruk").innerHTML =
    isiStruk;

  document.getElementById("strukTotal").innerHTML =
    "Total: Rp" + formatRupiah(total);
}

function hitungKembalian() {

  const bayar =
    parseInt(document.getElementById("bayar").value);

  if (isNaN(bayar)) {

    alert("Masukkan uang bayar!");

    return;
  }

  const kembali = bayar - total;

  document.getElementById("kembalian").innerHTML =
    "Kembalian: Rp" + formatRupiah(kembali);

  document.getElementById("strukBayar").innerHTML =
    "Bayar: Rp" + formatRupiah(bayar);

  document.getElementById("strukKembali").innerHTML =
    "Kembali: Rp" + formatRupiah(kembali);
}

function resetKasir() {

  total = 0;

  isiStruk = "";

  document.getElementById("keranjang").innerHTML = "";

  document.getElementById("isiStruk").innerHTML = "";

  document.getElementById("total").innerHTML =
    "Total: Rp0";

  document.getElementById("kembalian").innerHTML =
    "Kembalian: Rp0";

  document.getElementById("strukTotal").innerHTML =
    "Total: Rp0";

  document.getElementById("strukBayar").innerHTML =
    "Bayar: Rp0";

  document.getElementById("strukKembali").innerHTML =
    "Kembali: Rp0";

  document.getElementById("bayar").value = "";
}

function cetakStruk() {

  const sekarang = new Date();

  document.getElementById("tanggal").innerHTML =
    sekarang.toLocaleString("id-ID");

  window.print();
}
