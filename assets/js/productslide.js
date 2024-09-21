const products = [
    {
      name: 'Original',
      image: './assets/images/b1.jpg',
      features: [
        '16pt thickness',
        'Available in matte or gloss finish',
        'Our “feel good” premium paper'
      ],
      images: [
        '/assets/images/1.jpg',
        '/assets/images/2.jpg',
        '/assets/images/3.jpg',
        '/assets/images/4.jpg',
      ]
    },
    {
      name: 'Cotton',
      image: './assets/images/b2.jpg',
      features: [
        '18pt thickness',
        'Uncoated and naturally bright white',
        'Made from cotton linters'
      ],
      images: [
        '/assets/images/4.jpg',
        '/assets/images/3.jpg',
        '/assets/images/2.jpg',
        '/assets/images/1.jpg',
      ]
    },
    {
      name: 'Super',
      image: './assets/images/b3.jpg',
      features: [
        '18pt thickness',
        'Available in Soft Touch or High Gloss',
        'Silky smooth, strong and durable'
      ],
      images: [
        '/assets/images/2.jpg',
        '/assets/images/3.jpg',
        '/assets/images/4.jpg',
        '/assets/images/1.jpg',
      ]
    },
    {
      name: 'Luxe',
      image: './assets/images/b4.jpg',
      features: [
        '32pt thickness',
        'Naturally textured – write on either side!',
        'Choice of eight eye-catching color seams'
      ],
      images: [
        '/assets/images/3.jpg',
        '/assets/images/3.jpg',
        '/assets/images/2.jpg',
        '/assets/images/1.jpg',
      ]
    },
    {
      name: 'Special Finishes',
      image: './assets/images/b5.jpg',
      features: [
        '18pt thickness with Soft Touch finish',
        'Gold foil or Silver foil',
        'Spot gloss or Raised spot gloss'
      ],
      images: [
        '/assets/images/2.jpg',
        '/assets/images/3.jpg',
        '/assets/images/2.jpg',
        '/assets/images/1.jpg',
      ]
    }
  ];
  
  // Select the container where products will be inserted
  const productContainer = document.getElementById('productContainer');
  
  // Select the slider elements
  const imgShowcase = document.querySelector('.img-showcase');
  const imgSelect = document.querySelector('.img-select');
  
  // Function to render the products dynamically
  function renderProducts() {
    products.forEach((product, index) => {
      const productHTML = `
        <div class="single-product" data-product="${index}">
          <input type="radio" name="product" value="${product.name}" id="product-${index}" hidden>
          <label for="product-${index}">
            <img src="${product.image}" alt="${product.name}">
            <h5>${product.name}</h5>
            <ul>
              ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
          </label>
        </div>
      `;
      productContainer.innerHTML += productHTML;
    });
  
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
  
    // Initially load the first product by default
    highlightActiveProduct(0);  // Highlight the first product
    loadProductImages(0);       // Load first product's images into the slider
  }
  
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
  
  // Initially render the products
  renderProducts();

  // =====================================================================================










  // table data for

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
  