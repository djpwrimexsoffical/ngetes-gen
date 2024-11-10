// JavaScript untuk animasi intro
window.addEventListener('load', () => {
    const intro = document.getElementById('intro');
    setTimeout(() => {
        intro.style.display = 'none';
    }, 3000); // Intro akan menghilang setelah 3 detik
});
// Menunggu sampai halaman dimuat
window.addEventListener('load', function() {
    const introImage = document.querySelector('.intro-image');
    // Menambahkan class 'visible' setelah halaman dimuat untuk memulai animasi
    introImage.classList.add('visible');
});
