// Function to animate the counting effect
function animateCounters() {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Adjust the speed as needed
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  }
  
  // Execute the counting animation when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
  });