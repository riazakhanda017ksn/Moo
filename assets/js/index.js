// Select all quantity items
const quantityItems = document.querySelectorAll('.quantity-item');

quantityItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all items
    quantityItems.forEach(el => el.classList.remove('active'));

    // Add 'active' class to the clicked item
    item.classList.add('active');
  });
});



// Select all quantity items
const selectedItem = document.querySelectorAll('.selected');

selectedItem.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all items
    selectedItem.forEach(el => el.classList.remove('active'));

    // Add 'active' class to the clicked item
    item.classList.add('active');
  });
});


// select design js

// Select all cards
const cards = document.querySelectorAll('.new-height');
// Function to handle card click
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove active class from all cards
    cards.forEach(c => c.classList.remove('active'));
    
    // Add active class to the clicked card
    card.classList.add('active');
  });
});
