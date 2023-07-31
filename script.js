// Modal operations
const openmodal01Buttons = document.querySelectorAll('[data-modal01-target]')
const closemodal01Buttons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openmodal01Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modal01 = document.querySelector(button.dataset.modal01Target)
    openmodal01(modal01)
  })
})

overlay.addEventListener('click', () => {
  const modal01s = document.querySelectorAll('.modal01.active')
  modal01s.forEach(modal01 => {
    closemodal01(modal01)
  })
})

closemodal01Buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modal01 = button.closest('.modal01')
    closemodal01(modal01)
  })
})

function openmodal01(modal01) {
  if (modal01 == null) return
  modal01.classList.add('active')
  overlay.classList.add('active')
}

function closemodal01(modal01) {
  if (modal01 == null) return
  modal01.classList.remove('active')
  overlay.classList.remove('active')
}


// Handling scrollable content
document.addEventListener('DOMContentLoaded', function() {
  const scrollableContent = document.querySelector('.scrollable-content');

  scrollableContent.addEventListener('click', function(event) {
      if (event.target.tagName === 'A' && event.target.closest('#navbar') === null) {
          event.preventDefault();
          const targetId = event.target.getAttribute('href').slice(1); // Get the target ID from the link href
          const targetElement = document.getElementById(targetId);

          // Check if the target element exists
          if (targetElement) {
              // Calculate the target offset from the top of the page
              const targetOffset = targetElement.getBoundingClientRect().top;
              // Set smooth scroll behavior
              window.scrollBy({
                  top: targetOffset,
                  behavior: 'smooth'
              });
          }
      }
  });
});

 







