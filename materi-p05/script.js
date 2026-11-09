// document.getElementById("tombol").addEventListener("click", function(){
//     //kondisi
//     document.getElementById("judul").textContent = "Halo Semua";
// });

// $(document).ready(function(){
//     //kondisi
//     $("#btn1").click(function(){
//         $("ol").append("<li>Data bertambah</li>");
//     });

//     $("#btn2").click(function(){
//         $("ol li:last").remove();
//     });

//     $("#merah").click(function(){
//         $(".teks").css("color", "red");
//     });

//     $("#biru").click(function(){
//         $(".teks").css("color", "blue");
//     });

//     $("#sembunyi").click(function(){
//         $("#teks2").hide();
//     });

//     $("#tampil").click(function(){
//         $("#teks2").show();
//     });

//     $("#toggle").click(function(){
//         $("#teks2").toggle();
//     });
// });

// $("#tampil").click(function(){
//     let nama = $("#nama").val().trim();
//     if(nama == ""){
//         $("#profile").text("Masukkan nama yang benar!");
//     } else{
//         $("#profile").text("Nama Anda : " + nama);
//     }
// });

// $(document).ready(function(){
//     $("#tambah").click(function(){
//         let daftar = $("#daftar").val().trim();
//         if(daftar == ""){
//             $("#menampilkan").text("Apa daftarnya?");
//         } else{
//             $("#menampilkan").text("Daftar Belanja : " + daftar);
//         }
//     });

//     $("#tambah").click(function(){
//         $("ol").append(<li>daftar</li>);
//     });

//     $("#hapus").click(function(){
//         $("ol li:last").remove();
//     });

//     $("#hide").click(function(){
//         $("#tambah, #hapus, #daftar").hide();
//     });

//     $("#show").click(function(){
//         $("#tambah", "#hapus", "daftar").show();
//     });
// });

$(document).ready(function(){
    $("#tambah").click(function(){
        let daftar = $("#daftar").val().trim();
        if(daftar === ""){
            $("#menampilkan").html("<p style='color:red;'>Apa daftarnya?</p>");
        } else{
            $("#daftar-list").append("<li>" + daftar + "</li>");
            $("#menampilkan").text("Daftar Belanja Tambahan: " + daftar);
            $("#daftar").val("");
        }
    });

    $("#hapus").click(function(){
        if($("#daftar-list li").length > 1){
            $("#daftar-list li:last").remove();
            $("#menampilkan").text("Item terakhir berhasil dihapus.");
        } else{
            $("#menampilkan").text("Tidak ada item yang dapat dihapus.");
        }
    });

    $("#hide").click(function(){
        $("#konten-belanja").hide();
    });

    $("#show").click(function(){
        $("#konten-belanja").show();
    });
});