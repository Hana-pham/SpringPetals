// Simulated product data (shared across all pages)
const products = [
    {
        "id": "Tulips",
        "title": "Tulip Bouquet",
        "price": 30.00,
        "description": "Consists of 6 stems.Little Prince is delightful arrangement arranged into a small ceramic pot. There's no need for the recipients to have to fuss or find a vase for these.Perfect for so many occasions - to celebrate the arrival of a new little prince or to send Happy Birthday wishes.Upgrade to Amazing in a Ceramic and our florists will add extra blooms and design your Little Prince into a larger ceramic po",
        "image": "./images/white_tulip.jpg"
    },
    {
        "id": "Roses",
        "title": "Rose Bouquet",
        "price": 45.00,
        "description": "A romantic bouquet of red roses.",
        "image": "./images/white_tulip.jpg"
    },
    {
        "id": "Lilies",
        "title": "Lily Bouquet",
        "price": 50.00,
        "description": "An elegant bouquet of lilies.",
        "image": "./images/white_tulip.jpg"
    }
];

// Function to render products on the home page
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
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
