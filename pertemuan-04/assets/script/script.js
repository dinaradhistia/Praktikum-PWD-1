const btnTop = document.getElementById("btn-top");

// tampilkan tombol jika scroll > 500px, sembunyikan jika tidak
window.addEventListener("scroll", function(){
  if(window.scrollY > 500){
    btnTop.style.display = "block";
  } else{
    btnTop.style.display = "none";
  }
});

// klik tombol langsung kembali ke header
btnTop.addEventListener("click", function(){
  window.scrollTo(0, 0);
});