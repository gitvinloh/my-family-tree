// Create the "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.textContent = '↑ Back to Top';
document.body.appendChild(backToTopButton);

// Add styles to the button
const style = document.createElement('style');
style.textContent = `
  #backToTop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    font-size: 14px;
    background: #2575fc;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: opacity 0.3s, visibility 0.3s;
  }
  #backToTop:hover {
    background: #6a11cb;
  }
`;
document.head.appendChild(style);

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll smoothly back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});