let total = 0;

// ambil data saat aplikasi dibuka
window.onload = function () {

    const dataKeranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

    total = localStorage.getItem("total") || 0;

    document.getElementById("total").textContent = total;

    dataKeranjang.forEach(item => {
        tampilkanProduk(item.nama, item.harga);
    });
};

function tambahProduk(nama, harga) {

    tampilkanProduk(nama, harga);

    total = parseInt(total) + harga;

    updateTotal();

    simpanData(nama, harga);
}

function tampilkanProduk(nama, harga) {

    const keranjang = document.getElementById("keranjang");

    const item = document.createElement("li");

    item.innerHTML = `
        ${nama} - Rp${harga}
        <button onclick="hapusItem(this, '${nama}', ${harga})">
            Hapus
        </button>
    `;

    keranjang.appendChild(item);
}

function hapusItem(button, nama, harga) {

    button.parentElement.remove();

    total -= harga;

    updateTotal();

    let dataKeranjang =
        JSON.parse(localStorage.getItem("keranjang")) || [];

    const index = dataKeranjang.findIndex(
        item => item.nama === nama && item.harga === harga
    );

    if (index > -1) {
        dataKeranjang.splice(index, 1);
    }

    localStorage.setItem(
        "keranjang",
        JSON.stringify(dataKeranjang)
    );
}

function updateTotal() {

    document.getElementById("total").textContent = total;

    localStorage.setItem("total", total);
}

function simpanData(nama, harga) {

    let dataKeranjang =
        JSON.parse(localStorage.getItem("keranjang")) || [];

    dataKeranjang.push({
        nama: nama,
        harga: harga
    });

    localStorage.setItem(
        "keranjang",
        JSON.stringify(dataKeranjang)
    );
}

function hitungKembalian() {

    const bayar =
        parseInt(document.getElementById("bayar").value);

    const kembalian = bayar - total;

    document.getElementById("kembalian")
        .textContent = kembalian;
}

function resetKasir() {

    document.getElementById("keranjang").innerHTML = "";

    total = 0;

    updateTotal();

    document.getElementById("bayar").value = "";

    document.getElementById("kembalian").textContent = 0;

    localStorage.removeItem("keranjang");

    localStorage.removeItem("total");
}