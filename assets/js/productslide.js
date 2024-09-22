// const products = [
//     {
//       name: 'Original',
//       image: './assets/images/b1.jpg',
//       features: [
//         '16pt thickness',
//         'Available in matte or gloss finish',
//         'Our “feel good” premium paper'
//       ],
//       images: [
//         '/assets/images/1.jpg',
//         '/assets/images/2.jpg',
//         '/assets/images/3.jpg',
//         '/assets/images/4.jpg',
//       ]
//     },
//     {
//       name: 'Cotton',
//       image: './assets/images/b2.jpg',
//       features: [
//         '18pt thickness',
//         'Uncoated and naturally bright white',
//         'Made from cotton linters'
//       ],
//       images: [
//         '/assets/images/4.jpg',
//         '/assets/images/3.jpg',
//         '/assets/images/2.jpg',
//         '/assets/images/1.jpg',
//       ]
//     },
//     {
//       name: 'Super',
//       image: './assets/images/b3.jpg',
//       features: [
//         '18pt thickness',
//         'Available in Soft Touch or High Gloss',
//         'Silky smooth, strong and durable'
//       ],
//       images: [
//         '/assets/images/2.jpg',
//         '/assets/images/3.jpg',
//         '/assets/images/4.jpg',
//         '/assets/images/1.jpg',
//       ]
//     },
//     {
//       name: 'Luxe',
//       image: './assets/images/b4.jpg',
//       features: [
//         '32pt thickness',
//         'Naturally textured – write on either side!',
//         'Choice of eight eye-catching color seams'
//       ],
//       images: [
//         '/assets/images/3.jpg',
//         '/assets/images/3.jpg',
//         '/assets/images/2.jpg',
//         '/assets/images/1.jpg',
//       ]
//     },
//     {
//       name: 'Special Finishes',
//       image: './assets/images/b5.jpg',
//       features: [
//         '18pt thickness with Soft Touch finish',
//         'Gold foil or Silver foil',
//         'Spot gloss or Raised spot gloss'
//       ],
//       images: [
//         '/assets/images/2.jpg',
//         '/assets/images/3.jpg',
//         '/assets/images/2.jpg',
//         '/assets/images/1.jpg',
//       ]
//     }
//   ];
  
//   // Select the container where products will be inserted
//   const productContainer = document.getElementById('productContainer');
  
//   // Select the slider elements
//   const imgShowcase = document.querySelector('.img-showcase');
//   const imgSelect = document.querySelector('.img-select');
  
//   // Function to render the products dynamically
//   function renderProducts() {
//     products.forEach((product, index) => {
//       const productHTML = `
//         <div class="single-product" data-product="${index}">
//           <input type="radio" name="product" value="${product.name}" id="product-${index}" hidden>
//           <label for="product-${index}">
//             <img src="${product.image}" alt="${product.name}">
//             <h5>${product.name}</h5>
//             <ul>
//               ${product.features.map(feature => `<li>${feature}</li>`).join('')}
//             </ul>
//           </label>
//         </div>
//       `;
//       productContainer.innerHTML += productHTML;
//     });
  
//     // Add event listeners to product cards and make them clickable
//     document.querySelectorAll('.single-product').forEach(productCard => {
//       productCard.addEventListener('click', (event) => {
//         const productId = event.currentTarget.dataset.product;
//         highlightActiveProduct(productId);
//         loadProductImages(productId);
  
//         // Check the radio button associated with the clicked product
//         const radioButton = document.querySelector(`#product-${productId}`);
//         if (radioButton) {
//           radioButton.checked = true;
//         }
//       });
//     });
  
//     // Initially load the first product by default
//     highlightActiveProduct(0);  // Highlight the first product
//     loadProductImages(0);       // Load first product's images into the slider
//   }
  
//   // Function to load product images into the slider
//   function loadProductImages(productId) {
//     // Clear existing images
//     imgShowcase.innerHTML = '';
//     imgSelect.innerHTML = '';
  
//     // Get the image array for the selected product
//     const images = products[productId].images;
  
//     // Add images to the slider
//     images.forEach((image, index) => {
//       // Add image to the showcase
//       const imgElement = document.createElement('img');
//       imgElement.src = image;
//       imgElement.alt = `Product image ${index + 1}`;
//       imgShowcase.appendChild(imgElement);
  
//       // Add thumbnails
//       const thumbElement = document.createElement('div');
//       thumbElement.classList.add('img-item');
//       thumbElement.innerHTML = `
//         <a href="#" data-id="${index + 1}">
//           <img src="${image}" alt="product thumbnail">
//         </a>`;
//       imgSelect.appendChild(thumbElement);
//     });
  
//     // Set active class to the first image by default
//     const firstThumbnail = imgSelect.querySelector('.img-item a');
//     firstThumbnail.classList.add('active');
  
//     // Set up the slider behavior for the new images
//     setupSlider();
//   }
  
//   // Function to set up slider functionality
//   function setupSlider() {
//     const imgs = document.querySelectorAll('.img-select a');
//     const imgBtns = [...imgs];
//     let imgId = 1;
  
//     // Add active class to the first image
//     imgBtns[0].classList.add('active');
  
//     imgBtns.forEach((imgItem) => {
//       imgItem.addEventListener('click', (event) => {
//         event.preventDefault();
//         imgBtns.forEach(btn => btn.classList.remove('active'));
//         imgItem.classList.add('active');
//         imgId = imgItem.dataset.id;
//         slideImage();
//       });
//     });
  
//     function slideImage() {
//       const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
//       document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
//     }
  
//     window.addEventListener('resize', slideImage);
//   }
  
//   // Function to highlight the active product
//   function highlightActiveProduct(productId) {
//     // Clear the previous active class
//     document.querySelectorAll('.single-product').forEach(product => {
//       product.classList.remove('active-product');
//     });
  
//     // Highlight the selected product
//     const selectedProduct = document.querySelector(`.single-product[data-product="${productId}"]`);
//     selectedProduct.classList.add('active-product');
//   }
  
//   // Initially render the products
//   renderProducts();

  // =====================================================================================


  document.getElementById('see-more-btn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.hidden_');
    
    hiddenItems.forEach(item => {
      item.classList.remove('hidden_'); // Remove the hidden class to show items
    });
  
    this.style.display = 'none'; // Hide the "See More" button
  });
  







// 














  const products = [
    {
      name: 'Original',
      images: [
        '/assets/images/1.jpg',
        '/assets/images/2.jpg',
        '/assets/images/3.jpg',
        '/assets/images/4.jpg',
      ]
    },
    {
      name: 'Cotton',
      images: [
        '/assets/images/4.jpg',
        '/assets/images/3.jpg',
        '/assets/images/2.jpg',
        '/assets/images/1.jpg',
      ]
    },
    {
      name: 'Super',
      images: [
        '/assets/images/2.jpg',
        '/assets/images/3.jpg',
        '/assets/images/4.jpg',
        '/assets/images/1.jpg',
      ]
    },
    {
      name: 'Luxe',
      images: [
        '/assets/images/3.jpg',
        '/assets/images/3.jpg',
        '/assets/images/2.jpg',
        '/assets/images/1.jpg',
      ]
    },
    {
      name: 'Special Finishes',
      images: [
        '/assets/images/2.jpg',
        '/assets/images/3.jpg',
        '/assets/images/2.jpg',
        '/assets/images/1.jpg',
      ]
    }
  ];
  
  // Select the slider elements
  const imgShowcase = document.querySelector('.img-showcase');
  const imgSelect = document.querySelector('.img-select');
  
  // Add event listeners to product cards and make them clickable
  document.querySelectorAll('.single-product').forEach(productCard => {
    productCard.addEventListener('click', (event) => {
      const productId = event.currentTarget.dataset.product;
      highlightActiveProduct(productId);
      loadProductImages(productId);
  
      // Check the radio button associated with the clicked product
      const radioButton = document.querySelector(`#product-${productId}`);
      if (radioButton) {
        radioButton.checked = true;
      }
    });
  });
  
  // Function to load product images into the slider
  function loadProductImages(productId) {
    // Clear existing images
    imgShowcase.innerHTML = '';
    imgSelect.innerHTML = '';
  
    // Get the image array for the selected product
    const images = products[productId].images;
  
    // Add images to the slider
    images.forEach((image, index) => {
      // Add image to the showcase
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = `Product image ${index + 1}`;
      imgShowcase.appendChild(imgElement);
  
      // Add thumbnails
      const thumbElement = document.createElement('div');
      thumbElement.classList.add('img-item');
      thumbElement.innerHTML = `
        <a href="#" data-id="${index + 1}">
          <img src="${image}" alt="product thumbnail">
        </a>`;
      imgSelect.appendChild(thumbElement);
    });
  
    // Set active class to the first image by default
    const firstThumbnail = imgSelect.querySelector('.img-item a');
    firstThumbnail.classList.add('active');
  
    // Set up the slider behavior for the new images
    setupSlider();
  }
  
  // Function to set up slider functionality
  function setupSlider() {
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;
  
    // Add active class to the first image
    imgBtns[0].classList.add('active');
  
    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgBtns.forEach(btn => btn.classList.remove('active'));
        imgItem.classList.add('active');
        imgId = imgItem.dataset.id;
        slideImage();
      });
    });
    document.querySelectorAll('.single-product input[type="radio"]').forEach((product, index) => {
      product.addEventListener('click', () => {
        const generatedId = `paper-${index + 1}`;
        
        // Assign a dynamic id to the clicked product
        product.id = generatedId;
        
        // Update the corresponding label's for attribute
        const label = product.nextElementSibling;
        label.setAttribute('for', generatedId);
    
        // Log the generated id for confirmation (optional)
        console.log(`Generated ID: ${product.id}`);
      });
    });
    
    function slideImage() {
      const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
      document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }
  
    window.addEventListener('resize', slideImage);
  }
  
  // Function to highlight the active product
  function highlightActiveProduct(productId) {
    // Clear the previous active class
    document.querySelectorAll('.single-product').forEach(product => {
      product.classList.remove('active-product');
    });
  
    // Highlight the selected product
    const selectedProduct = document.querySelector(`.single-product[data-product="${productId}"]`);
    selectedProduct.classList.add('active-product');
  }
  
  // Initially load the first product by default
  highlightActiveProduct(0);  // Highlight the first product
  loadProductImages(0);       // Load first product's images into the slider
  




// ============================ clicking color change code ====================================


document.addEventListener('DOMContentLoaded', function () {
  // Select the Luxe card input and color selection div
  const luxeCard = document.querySelector('#product-3'); // ID of the Luxe card radio input
  const colorSelection = document.getElementById('colorSelection');
  const colorOptions = document.getElementById('colorOptions');
  const imgShowcase = document.querySelector('.img-showcase'); // Image showcase div

  // Hide the colorSelection by default
  colorSelection.style.display = 'none';

  // Event listener for the Luxe card click
  luxeCard.addEventListener('click', function () {
    // Check if the Luxe card is selected
    if (this.checked) {
      // Show the color options
      colorSelection.style.display = 'block';
    }
  });

  // Handle color selection and update slider images
  colorOptions.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      // Remove active class from all color options
      Array.from(colorOptions.children).forEach(function (colorItem) {
        colorItem.classList.remove('active');
      });

      // Add active class to the selected color
      event.target.classList.add('active');

      const selectedColor = event.target.getAttribute('data-color');
      updateSliderImages(selectedColor);
    }
  });

  // Function to update the slider images based on the selected color
  function updateSliderImages(color) {
    let images = [];

    // Switch to set images based on color selection
    switch (color) {
      case 'Raven Black':
        images = [
          './assets/images/c1.png',
          './assets/images/c2.png',
          './assets/images/c3.png',
        ];
        break;
      case 'Chili Red':
        images = [
          './assets/images/m1.png',
          './assets/images/m2.png',
          
        ];
        break;
      case 'Ocean Blue':
        images = [
          './assets/images/b1.png',
          './assets/images/b2.png',
        ];
        break;
        case 'Polar White':
          images = [
            './assets/images/c1.png',
            './assets/images/c2.png',
            './assets/images/c3.png',

          ];
          break;
          case 'Tiger Orange':
            images = [
              './assets/images/m1.png',
              './assets/images/m2.png',  
            ];
            break;

            case 'Forest Green':
              images = [
                './assets/images/b1.png',
                './assets/images/b2.png',  
              ];
              break;

              case 'Neon Pink':
              images = [
                './assets/images/b1.png',
                './assets/images/b2.png',  
              ];
              break;

              case 'Sunny Yellow':
                images = [
                  './assets/images/m1.png',
                  './assets/images/m2.png',  
                ];
                break;
              
     
    }

   // Update the imgShowcase div with new images
   imgShowcase.innerHTML = images
   .map((imgSrc) => `<img src="${imgSrc}" alt="slider image">`)
   .join('');

 // Optionally set the first image as the displayed one
 const firstImage = document.querySelector('.img-showcase img');
 if (firstImage) {
   firstImage.scrollIntoView({ behavior: 'smooth' });
 }
}
});

















  document.addEventListener('DOMContentLoaded', function() {
    const quantityItems = document.querySelectorAll('.quantity-item');
    const totalPriceDisplay = document.getElementById('total-price');
  
    // Add click event to each quantity item
    quantityItems.forEach(item => {
      item.addEventListener('click', function() {
        const radioInput = this.querySelector('input[type="radio"]');
        
        // Check the radio input
        radioInput.checked = true;
        
        // Update the total price based on the selected quantity
        totalPriceDisplay.textContent = radioInput.value;
      });
    });
  });
  