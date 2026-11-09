// Data produk
var produk = [
  { id: 1, nama: "Sang Alkemis",         penulis: "Paulo Coelho",            harga: 79000,  stok: 6,  ikon: "🔮", warna: "linear-gradient(135deg, #0f0a1f, #6d28d9)" },
  { id: 2, nama: "Crime and Punishment", penulis: "Fyodor Dostoyevsky",      harga: 115000, stok: 4,  ikon: "⚖️", warna: "linear-gradient(135deg, #111827, #2563eb)" },
  { id: 3, nama: "Laut Bercerita",       penulis: "Leila S. Chudori",        harga: 105000, stok: 7,  ikon: "🌊", warna: "linear-gradient(135deg, #1e3a8a, #38bdf8)" },
  { id: 4, nama: "Bumi Manusia",         penulis: "Pramoedya Ananta Toer",   harga: 120000, stok: 8,  ikon: "🌏", warna: "linear-gradient(135deg, #4c1d95, #2563eb)" },
  { id: 5, nama: "Fihi Ma Fihi",         penulis: "Jalaluddin Rumi",         harga: 92000,  stok: 5,  ikon: "🌙", warna: "linear-gradient(135deg, #312e81, #a78bfa)" },
  { id: 6, nama: "Misteri Soliter",      penulis: "Jostein Gaarder",         harga: 98000,  stok: 3,  ikon: "🃏", warna: "linear-gradient(135deg, #0f0a1f, #7c3aed)" },
  { id: 7, nama: "The First Frost",      penulis: "Zhu Yi",                  harga: 110000, stok: 1,  ikon: "❄️", warna: "linear-gradient(135deg, #1d4ed8, #c4b5fd)" }
];

// Isi keranjang
var keranjang = {};

// Fungsi bantuan
function rupiah(angka){
  return "Rp " + angka.toLocaleString("id-ID");
}

function cariProduk(id){
  for(var i = 0; i < produk.length; i++){
    if(produk[i].id === id){
      return produk[i];
    }
  }
  return null;
}

// Sisa stok
function sisaStok(p){
  return p.stok - (keranjang[p.id] || 0);
}

// Menampilkan produk
// Perulangan + createElement(), createTextNode(), appendChild()
function tampilkanProduk(){
  var daftar = document.getElementById("daftar-produk");

  for(var i = 0; i < produk.length; i++){
    var p = produk[i];

    var kartu = document.createElement("div");
    kartu.className = "produk-card";
    kartu.setAttribute("data-nama", p.nama + " " + p.penulis);

    var ikon = document.createElement("div");
    ikon.className = "produk-ikon";
    ikon.style.background = p.warna;
    ikon.appendChild(document.createTextNode(p.ikon));

    var info = document.createElement("div");
    info.className = "produk-info";

    var nama = document.createElement("h3");
    nama.appendChild(document.createTextNode(p.nama));

    var penulis = document.createElement("p");
    penulis.className = "produk-penulis";
    penulis.appendChild(document.createTextNode(p.penulis));

    var harga = document.createElement("p");
    harga.className = "produk-harga";
    harga.appendChild(document.createTextNode(rupiah(p.harga)));

    var stok = document.createElement("p");
    stok.className = "produk-stok";
    stok.id = "stok-" + p.id;
    stok.appendChild(document.createTextNode("Stok: " + p.stok));

    var tombol = document.createElement("button");
    tombol.className = "btn-tambah";
    tombol.setAttribute("data-id", p.id);
    tombol.appendChild(document.createTextNode("Tambah ke Keranjang"));

    info.appendChild(nama);
    info.appendChild(penulis);
    info.appendChild(harga);
    info.appendChild(stok);
    info.appendChild(tombol);

    kartu.appendChild(ikon);
    kartu.appendChild(info);
    daftar.appendChild(kartu);
  }
}

// Jquery
$(document).ready(function(){

  tampilkanProduk();
  perbaruiKeranjang();

  // Memperbarui teks stok pada produk
  function perbaruiStok(p){
    var sisa = sisaStok(p);
    $("#stok-" + p.id)
      .text(sisa > 0 ? "Stok: " + sisa : "Stok habis")
      .toggleClass("habis", sisa <= 0);
  }

  function perbaruiSemuaStok(){
    for(var i = 0; i < produk.length; i++){
      perbaruiStok(produk[i]);
    }
  }

  // Memperbarui jumlah item dan total harga dengan text()
  function perbaruiKeranjang(){
    var jumlah = 0;
    var total = 0;

    for(var id in keranjang){
      var p = cariProduk(Number(id));
      jumlah += keranjang[id];
      total += keranjang[id] * p.harga;
    }

    $("#jumlah-item").text(jumlah);
    $("#badge-keranjang").text(jumlah);
    $("#total-harga").text(rupiah(total));
    $("#keranjang-kosong").toggle(jumlah === 0);
  }

  // Tambah ke keranjang: append() + fadeIn() + alert()
  $("#daftar-produk").on("click", ".btn-tambah", function(){
    var id = Number($(this).data("id"));
    var p = cariProduk(id);

    // Pop-up alert jika stok habis
    if(sisaStok(p) <= 0){
      alert("Maaf, stok " + p.nama + " sudah habis!");
      return;
    }

    keranjang[id] = (keranjang[id] || 0) + 1;

    var $item = $("#daftar-keranjang li[data-id='" + id + "']");

    // Jika produk belum ada di keranjang, buat item baru
    if($item.length === 0){
      $item = $("<li>")
        .addClass("item")
        .attr("data-id", id)
        .hide()
        .append(
          $("<div>").addClass("item-info")
            .append($("<span>").addClass("item-nama").text(p.nama))
            .append($("<span>").addClass("item-detail"))
        )
        .append(
          $("<button>").addClass("btn-hapus").attr("title", "Hapus").text("✕")
        );

      $("#daftar-keranjang").append($item); //append()
      $item.fadeIn(300);                    //fadeIn()
    }

    // Perbarui jumlah dan subtotal pada item
    $item.find(".item-detail").text(
      keranjang[id] + " x " + rupiah(p.harga) + " = " + rupiah(keranjang[id] * p.harga)
    );

    perbaruiStok(p);
    perbaruiKeranjang();
  });

  // Hapus satu item: confirm() + fadeOut() + remove()
  $("#daftar-keranjang").on("click", ".btn-hapus", function(){
    var $item = $(this).closest("li");
    var id = Number($item.attr("data-id"));
    var p = cariProduk(id);

    if(!confirm("Hapus " + p.nama + " dari keranjang?")){
      return;
    }

    delete keranjang[id];
    perbaruiStok(p);
    perbaruiKeranjang();

    $item.fadeOut(300, function(){
      $(this).remove();  //remove()
    });
  });

  // Kosongkan keranjang: confirm() + empty()
  $("#btn-kosongkan").on("click", function(){
    if($.isEmptyObject(keranjang)){
      alert("Keranjang masih kosong.");
      return;
    }

    if(!confirm("Kosongkan seluruh isi keranjang?")){
      return;
    }

    keranjang = {};
    $("#daftar-keranjang").empty(); //empty()
    perbaruiSemuaStok();
    perbaruiKeranjang();
  });

  // Buka/tutup panel keranjang: fadeToggle()
  $("#btn-keranjang").on("click", function(){
    $("#panel-keranjang").fadeToggle(250);
  });

  $("#btn-tutup").on("click", function(){
    $("#panel-keranjang").fadeOut(250);
  });

  // Checkout: prompt() + ringkasan pesanan
  $("#btn-checkout").on("click", function(){
    if($.isEmptyObject(keranjang)){
      alert("Keranjang masih kosong. Tambahkan produk terlebih dahulu.");
      return;
    }

    var nama = prompt("Masukkan nama pembeli:");

    if(nama === null){
      return; //dibatalkan
    }

    nama = nama.trim();

    if(nama === ""){
      alert("Nama pembeli tidak boleh kosong!");
      return;
    }

    // Susun ringkasan pesanan
    var total = 0;
    var $daftar = $("#ringkasan-daftar").empty();

    for(var id in keranjang){
      var p = cariProduk(Number(id));
      var qty = keranjang[id];
      var subtotal = qty * p.harga;

      total += subtotal;
      $daftar.append($("<li>").text(p.nama + " x " + qty + " = " + rupiah(subtotal)));

      p.stok -= qty;  //stok berkurang setelah checkout
    }

    $("#ringkasan-nama").text(nama);
    $("#ringkasan-total").text(rupiah(total));

    // Kosongkan keranjang
    keranjang = {};
    $("#daftar-keranjang").empty();
    perbaruiSemuaStok();
    perbaruiKeranjang();

    $("#panel-keranjang").fadeOut(250);
    $("#ringkasan").fadeIn(400);
    $("html, body").animate(
      { scrollTop: $("#ringkasan").offset().top - 90 },
      500
    );
  });

  // Pencarian produk: val() + toggle()
  $("#cari").on("input", function(){
    var kataKunci = $(this).val().toLowerCase().trim(); //val()

    $(".produk-card").each(function(){
      var cocok = $(this).attr("data-nama").toLowerCase().indexOf(kataKunci) !== -1;
      $(this).toggle(cocok);  //toggle()
    });

    $("#tidak-ditemukan").toggle($(".produk-card:visible").length === 0);
  });
});