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
});

// Pencegahan klik kanan untuk melindungi isi konten
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});