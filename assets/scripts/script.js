document.addEventListener('DOMContentLoaded', function() {
    // Ambil URL halaman saat ini
    var currentUrl = window.location.href;

    // Ambil semua elemen menu
    var menuItems = document.querySelectorAll('nav ul li');

    // Hapus kelas active dari semua elemen menu
    menuItems.forEach(function(item) {
        item.classList.remove('active');
    });

    // Loop melalui setiap elemen menu
    menuItems.forEach(function(item) {
        // Periksa apakah URL halaman saat ini cocok dengan URL elemen menu
        if (item.querySelector('a').href === currentUrl) {
            // Tambahkan kelas active ke elemen menu yang sesuai
            item.classList.add('active');
        }
    });

    // Pencegahan klik kanan untuk melindungi isi konten
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});

// Definisikan variabel untuk menyimpan posisi scroll sebelumnya
let lastScrollTop = 0;

// Tambahkan event listener untuk event scroll
window.addEventListener("scroll", function() {
    // Ambil posisi scroll saat ini
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Bandingkan posisi scroll saat ini dengan posisi scroll sebelumnya
    if (currentScroll > lastScrollTop) {
        // Jika scroll ke bawah, sembunyikan navbar dengan transformasi translateY(-100%)
        document.querySelector("nav").style.transform = "translateY(-100%)";
    } else {
        // Jika scroll ke atas, tampilkan kembali navbar dengan transformasi translateY(0)
        document.querySelector("nav").style.transform = "translateY(0)";
    }
    
    // Simpan posisi scroll saat ini sebagai posisi scroll sebelumnya
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);