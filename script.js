const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Atur ukuran canvas sesuai ukuran layar
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Array untuk menyimpan objek partikel
let particles = [];

// Kelas untuk membuat objek partikel
class Particle {
    constructor(x, y) {
        this.x = x; 
        this.y = y; 
        this.size = Math.random() * 3 + 1;  // Ukuran partikel acak
        this.speedX = Math.random() * 3 - 1.5;  // Kecepatan horizontal acak
        this.speedY = Math.random() * 3 - 1.5;  // Kecepatan vertikal acak
        this.color = 'rgba(255, 255, 255, 0.7)';  // Warna partikel putih semi-transparan
    }

    // Update posisi dan properti partikel
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Jika partikel keluar dari canvas, reset posisinya
        if (this.size > 0.2) this.size -= 0.1;  // Mengurangi ukuran agar partikel memudar
    }

    // Gambar partikel
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Fungsi untuk membuat partikel di posisi acak di layar
function createParticles(e) {
    const numberOfParticles = 5;  // Jumlah partikel per klik
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(e.x, e.y));
    }
}

// Fungsi untuk animasi partikel
function animateParticles() {
    // Hapus canvas agar tidak ada gambar ganda
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Gambar dan perbarui setiap partikel
    particles.forEach((particle, index) => {
        particle.update();
        particle.draw();
        
        // Hapus partikel yang sudah terlalu kecil (memudar)
        if (particle.size <= 0.2) {
            particles.splice(index, 1);
        }
    });

    // Panggil kembali animasi di frame berikutnya
    requestAnimationFrame(animateParticles);
}

// Event listener untuk membuat partikel saat mouse diklik
canvas.addEventListener('click', createParticles);

// Mulai animasi partikel
animateParticles();

// Resize canvas jika ukuran layar berubah
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
