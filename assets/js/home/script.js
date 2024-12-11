

document.addEventListener('DOMContentLoaded', () => {
  const scrollableContainer = document.getElementById('scroll-container');
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');
  const dotsContainer = document.getElementById('dots');
  const items = document.querySelectorAll('.container .box');
  const totalItems = items.length;

  // Dynamically generate dots based on the number of items
  for (let i = 0; i < totalItems; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.setAttribute('data-index', i); // Store the index for later reference
      dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  // Function to update the active dot based on the scroll position
  function updateActiveDot() {
      const scrollPosition = scrollableContainer.scrollLeft;
      const itemWidth = items[0].offsetWidth;
      const activeIndex = Math.floor((scrollPosition + itemWidth / 2) / itemWidth);

      // Remove 'active' class from all dots
      dots.forEach(dot => dot.classList.remove('active'));

      // Add 'active' class to the current dot
      if (dots[activeIndex]) {
          dots[activeIndex].classList.add('active');
      }
      if (activeIndex === 0) {
        //leftArrow.classList.add("active") // Hide left arrow at the first item
    } else {
        //leftArrow.classList.remove("active") // Show left arrow if not at the first item
    }
  }

  // Event listener to update dots on scroll
  scrollableContainer.addEventListener('scroll', updateActiveDot);

  // Initial call to update dots on page load
  updateActiveDot();

  // Add click event to each dot to scroll to the corresponding item
  dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
          const index = parseInt(e.target.getAttribute('data-index'), 10);
          const itemWidth = items[0].offsetWidth;
          const scrollToPosition = index * itemWidth;

          // Smooth scroll to the item
          scrollableContainer.scrollTo({
              left: scrollToPosition,
              behavior: 'smooth' // Smooth scroll animation
          });

          // Update active dot after scrolling
          updateActiveDot();
      });
  });

  // Add click event for left arrow
  leftArrow.addEventListener('click', () => {
      const itemWidth = items[0].offsetWidth;
      let newScrollPosition = scrollableContainer.scrollLeft - itemWidth;

      // Loop back to the last item if we scroll past the first
      if (newScrollPosition < 0) {
          newScrollPosition = (totalItems - 1) * itemWidth;
      }

      // Smooth scroll to the new position
      scrollableContainer.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
      });

      // Update active dot after scrolling.
      updateActiveDot();
  });

  // Add click event for right arrow
  rightArrow.addEventListener('click', () => {
      const itemWidth = items[0].offsetWidth;
      let newScrollPosition = scrollableContainer.scrollLeft + itemWidth;

      // Loop back to the first item if we scroll past the last
      if (newScrollPosition >= totalItems * itemWidth) {
          newScrollPosition = 0;
      }

      // Smooth scroll to the new position
      scrollableContainer.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
      });

      // Update active dot after scrolling
      updateActiveDot();
  });
});

//box-1


let backGrid = document.getElementById("background-grid-1")
let numberBox = 300;
    for (let i = 0; i < numberBox; i++) {
        let box = document.createElement("div");
        box.classList.add("grid-box")
        backGrid.append(box)
    }

let cursor = document.getElementById("cursor-1")
window.onmousemove = function(e){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    
}
function lightBox() {
    let Btn = document.getElementById("lightBtn-box-1")
    let light = backGrid.querySelector(".animation")


    if (light.style.opacity === "1"){
    light.style.opacity = "0";
    }else {
        light.style.opacity = "1";
    }
}



//end





// container-1
const scrollableDiv = document.getElementById('ScrollDiv');
const scrollDistance = 60; // Jarak dari ujung div yang memicu scroll
const scrollSpeed = 60; // Kecepatan scroll

// Fungsi untuk menggulirkan div ke kiri atau kanan
function autoScroll(event) {
  const rect = scrollableDiv.getBoundingClientRect();
  const mouseX = event.clientX;

  // Menghitung jarak mouse dengan batas kiri dan kanan div
  const distanceLeft = mouseX - rect.left;
  const distanceRight = rect.right - mouseX;

  if (distanceLeft < scrollDistance) {
    // Scroll ke kiri
    scrollableDiv.scrollLeft -= scrollSpeed;
  } else if (distanceRight < scrollDistance) {
    // Scroll ke kanan
    scrollableDiv.scrollLeft += scrollSpeed;
  }
}

// Menambahkan event listener untuk mendeteksi gerakan mouse
scrollableDiv.addEventListener('mousemove', autoScroll);



//section
  // Pastikan ScrollTrigger bisa bekerja setelah halaman sepenuhnya dimuat
  gsap.registerPlugin(ScrollTrigger);


  window.addEventListener("load", () =>{
    let zoomImg = document.getElementById("zoomImage");
    let zoomText = document.getElementById("zoomContent");

   

  // Menambahkan animasi zoom pada gambar saat scroll
  gsap.to("#zoomImage", {
    scale: 5, // Zoom maksimal hingga 3x
    scrollTrigger: {
      trigger: ".wraper", // Elemen yang memicu ScrollTrigger
      start: "top top", // Mulai animasi saat elemen berada di atas layar
      end: "+=110%",
      pin: true, // Selesai animasi saat elemen telah keluar dari layar
      scrub: true, // Memungkinkan animasi mengikuti scroll
      markers: false, // Menyembunyikan marker untuk debugging
    }
  })
    .to("img",{
      scale: 0.1,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
  })

  if(zoomImg.style.scale = "5"){
    zoomText.style.opacity = "2";
    }else {
    zoomText.style.opacity = "1";
    }

  })