document.addEventListener('DOMContentLoaded', function() {
    // Ambil URL halaman saat ini
    var currentUrl = window.location.href;

    // Ambil semua elemen menu
    var menuItems = document.querySelectorAll('nav ul li');

    // Loop melalui setiap elemen menu
    menuItems.forEach(function(item) {
        // Periksa apakah URL halaman saat ini cocok dengan URL elemen menu
        if (item.querySelector('a').href === currentUrl) {
            // Tambahkan kelas active ke elemen menu yang sesuai
            item.classList.add('active');
        }
    });

    // Menambahkan keterangan bahwa halaman aktif adalah halaman beranda
    var homeMenuItem = document.querySelector('nav ul li:first-child');
    homeMenuItem.classList.add('active');
    homeMenuItem.innerHTML += '';
});

// Pencegahan klik kanan untuk melindungi isi content
document.addEventListener ('contextmenu', function(e) {
    e.preventDefault();
})