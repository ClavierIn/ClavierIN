const scrollContainer = document.getElementById('scroll-container');
const dotsContainer = document.getElementById('dots-container');
const slides = document.querySelectorAll('.container-item');

let dots =[];

//membuat dots untuk setiap slide
slides.forEach((slide, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');

  dot.addEventListener('click', () => scrollToSlide(index));

  dotsContainer.appendChild(dot);
  dots.push(dot);
})

// Fungsi untuk scroll ke slide berdasarkan index
function scrollToSlide(index){
  const slidewidth = slides[0].clienwidth;

  scrollContainer.scrollTo({
    left: slidewidth * index,

    behavior: 'smooth'
  });
  updateDots(index);
}
//updates dots untuk menandai slide aktif
function updateDots(activeIndex) {
  dots.forEach((dot, index) => {
    if (index === activeIndex) {
      dot.classList.add('active'); // tambahkan "active pada dot active"
    } else {
      dot.classList.remove("active");
    }
  });
}

scrollContainer.addEventListener('scroll', () => {
  const slideWidth = slides[0].clientWidth;
  const activeIndex = Math.round(scrollContainer.scrollLeft / slideWidth);
  updateDots(activeIndex);
});

window.addEventListener('resize', () => {
  const slideWidth = slide[0].clientWidth;
  const activeIndex = Math.round(scrollContainer.scrollLeft / slideWidth);

  updateDots(activeIndex)
})

updateDots(0);