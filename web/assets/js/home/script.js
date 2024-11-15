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
        leftArrow.style.display = 'none'; // Hide left arrow at the first item
    } else {
        leftArrow.style.display = 'block'; // Show left arrow if not at the first item
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

      // Update active dot after scrolling
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
