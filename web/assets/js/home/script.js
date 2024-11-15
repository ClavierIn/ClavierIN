const scrollContainer = document.getElementById('scrollContainer');
const dotsContainer = document.getElementById('dotsContainer');
const slides = document.querySelectorAll('.container-box');
let dots = [];

// Membuat dots untuk setiap slide
slides.forEach((slide, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  
  // Event listener untuk scroll ke slide tertentu saat dot diklik
  dot.addEventListener('click', () => scrollToSlide(index));
  
  dotsContainer.appendChild(dot);
  dots.push(dot);
});

// Fungsi untuk scroll ke slide berdasarkan index
function scrollToSlide(index) {
  const slideWidth = slides[0].clientWidth; // Mendapatkan lebar setiap slide
  scrollContainer.scrollTo({
    left: slideWidth * index, // Menggeser ke slide sesuai index
    behavior: 'smooth' // Scroll halus
  });
  updateDots(index); // Update dots saat slider bergeser
}

// Update dots untuk menandai slide aktif
function updateDots(activeIndex) {
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active'); // Tambahkan kelas "active" pada dot aktif
    } else {
      dot.classList.remove('active'); // Hapus kelas "active" dari dot yang lain
    }
  });
}

// Event listener untuk scroll: Update dot aktif saat slider di-scroll manual
scrollContainer.addEventListener('scroll', () => {
  const slideWidth = slides[0].clientWidth;
  const activeIndex = Math.round(scrollContainer.scrollLeft / slideWidth);
  updateDots(activeIndex);
});

// Update ukuran slide saat jendela diubah ukurannya
window.addEventListener('resize', () => {
  const slideWidth = slides[0].clientWidth;
  const activeIndex = Math.round(scrollContainer.scrollLeft / slideWidth);
  updateDots(activeIndex); // Pastikan dot tetap benar saat ukuran jendela berubah
});

// Setel dot pertama sebagai aktif saat halaman pertama kali dimuat
updateDots(0);