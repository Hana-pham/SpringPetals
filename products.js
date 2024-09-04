// Simulating loading JSON data
const products = [
    {
        "id": "Tulips",
        "title": "Tulip Bouquet",
        "price": 35.00,
        "image": "/images/white_tulip.jpg"
    },
    {
        "id": "Roses",
        "title": "Rose Bouquet",
        "price": 45.00,
        "image": "/images/white_tulip.jpg"
    },
    {
        "id": "Roses",
        "title": "Rose Bouquet",
        "price": 45.00,
        "image": "/images/white_tulip.jpg"
    }
];

// Function to render products dynamically
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h4>${product.title}</h4>
            <p>$${product.price.toFixed(2)}</p>
            <p><button>Add to Cart</button></p>
        `;
        productList.appendChild(productItem);
    });
}

// Ensure the products are rendered once the page is loaded
window.onload = renderProducts;
