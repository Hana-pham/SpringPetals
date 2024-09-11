// Simulated product data (shared across all pages)
const products = [
    {
        "id": "Tulips",
        "title": "Tulip Bouquet",
        "price": 30.00,
        "colors": ["yellow", "white"],  // Change 'color' to 'colors'
        "description": "Consists of 6 stems. Little Prince is delightful arrangement arranged into a small ceramic pot. There's no need for the recipients to have to fuss or find a vase for these. Perfect for so many occasions - to celebrate the arrival of a new little prince or to send Happy Birthday wishes. Upgrade to Amazing in a Ceramic and our florists will add extra blooms and design your Little Prince into a larger ceramic pot.",
        "image": "./images/white_tulip.jpg"
    },
    {
        "id": "Roses",
        "title": "Rose Bouquet",
        "price": 45.00,
        "colors": ["pink"],  // Use 'colors' (array) even for a single color
        "description": "A romantic bouquet of red roses.",
        "image": "./images/white_tulip.jpg"
    },
    {
        "id": "Lilies",
        "title": "Lily Bouquet",
        "price": 50.00,
        "colors": ["purple", "white"],  // List all applicable colors
        "description": "An elegant bouquet of lilies.",
        "image": "./images/white_tulip.jpg"
    }
];


// Function to render products on the home page

function renderProducts(productsToRender) {
    console.log('Rendering products:', productsToRender);
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear any existing content

    productsToRender.forEach(product => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `
            <div class="image-container">
                <a href="products.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                </a>
            </div>
            <h4>${product.title}</h4>
            <p>$${product.price.toFixed(2)}</p>
            <p><button class="button">Add to Cart</button></p>
        `;
        productList.appendChild(productItem);
    });
}

// Call renderProducts with the initial product list
window.onload = () => renderProducts(products);



// Function to render a single product on the product details page
function renderProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = products.find(p => p.id === productId);

    if (product) {
        const productDetails = document.getElementById('product-details');
        productDetails.innerHTML = `
            <div class="row">
            <div class="item-column">
            <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="item-column">
            <h1>${product.title}</h1>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Description:</p>
            <p>${product.description}</p>
            <button class="button">Add to Cart</button>
            </div>
            </div>
        `;
    } else {
        document.getElementById('product-details').innerHTML = "<p>Product not found.</p>";
    }
}

// Function to filter product 

//Sort by name and price
function toggleFilter() {
    const filterOptions = document.getElementById('filterOptions');
    const arrow = document.getElementById('arrow');
    
    if (filterOptions.style.display === "none") {
        filterOptions.style.display = "block";
        arrow.innerHTML = "▲"; // Change to up arrow when open
    } else {
        filterOptions.style.display = "none";
        arrow.innerHTML = "▼"; // Change to down arrow when closed
    }
}
function applyFilters() {
    // Get selected colors
    const selectedColors = getSelectedColors();
    
    // Filter products by selected colors
    let filteredProducts = filterByColors(selectedColors);

    // Get the selected sorting option (e.g., name-asc, price-desc)
    const sortOption = document.querySelector('input[name="sort"]:checked');
    const sortOrder = sortOption ? sortOption.value : '';

    // Apply sorting if an option is selected
    filteredProducts = sortProducts(filteredProducts, sortOrder);

    // Pass the filtered and sorted list to renderProducts
    renderProducts(filteredProducts);
}


// Sorting function
function sortProducts(products, sortOrder) {
    if (sortOrder === 'name-asc') {
        return products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'name-desc') {
        return products.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === 'price-asc') {
        return products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-desc') {
        return products.sort((a, b) => b.price - a.price);
    } else {
        return products; // Return unsorted if no sorting option is selected
    }
}
function getSelectedColors() {
    const selectedColors = [];
    const checkboxes = document.querySelectorAll('.color-filter:checked');
    checkboxes.forEach(checkbox => {
        selectedColors.push(checkbox.value.toLowerCase()); // Convert to lowercase for consistency
    });
    return selectedColors;
}


// Filter products by selected colors
function filterByColors(selectedColors) {
    if (selectedColors.length === 0) {
        return products; // Return all products if no color is selected
    }
    return products.filter(product => 
        product.colors.some(color => selectedColors.includes(color.toLowerCase())) // Convert product colors to lowercase
    );
}


