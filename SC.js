// Contoh: Tambahkan fungsi klik tombol favorit
document.querySelector('.favorite-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        this.innerHTML = '<i class="fas fa-star"></i>';
        alert("Ditambahkan ke favorit!");
    } else {
        this.innerHTML = '<i class="far fa-star"></i>';
    }
});

// Contoh: Ganti link saat diklik
document.querySelectorAll('.link-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Link ${this.textContent} akan dibuka...`);
        // window.open(this.href, '_blank'); // Uncomment untuk buka link
    });
});
