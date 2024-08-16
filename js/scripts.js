// scripts.js


document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const colorChangerButton = document.getElementById('colorChanger');
    const icon = colorChangerButton.querySelector('i');

    // Create a custom cursor element
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    

    // Handle color mode toggle
    colorChangerButton.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Move the custom cursor with the mouse
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Expand the cursor on mouse down
    document.addEventListener('mousedown', function() {
        cursor.classList.add('expand');
    });

    // Shrink the cursor on mouse up
    document.addEventListener('mouseup', function() {
        cursor.classList.remove('expand');
    });

  
});

  function toggleLike(button) {
    const img = button.querySelector('img');
    if (img.src.includes('like.png')) {
        img.src = 'images/liked.png'; // Path to the liked icon
    } else {
        img.src = 'images/like.png'; // Path to the like icon
    }
}



function toggleFaq(element) {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.icon');
      if (item.contains(element) && answer.style.display !== 'block') {
          answer.style.display = 'block';
          item.querySelector('.faq-question').classList.add('open');
      } else {
          answer.style.display = 'none';
          item.querySelector('.faq-question').classList.remove('open');
      }
  });
}



