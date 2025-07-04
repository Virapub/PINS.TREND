// main.js
// Central JavaScript file for PINSTREND website functionality

import pintrendData from './data.js';

// Update cart count in header
export function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    const totalItems = pintrendData.getCartItems().reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountElements.forEach(el => el.textContent = totalItems);
}

// Setup search functionality
export function setupSearch() {
    const searchIcon = document.querySelector('.search-icon');

    const searchInput = document.createElement('input');
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Search products...';

    let resultsContainer;

    searchIcon.addEventListener('click', () => {
        if (!document.querySelector('.search-input')) {
            searchIcon.parentElement.appendChild(searchInput);
            searchInput.focus();
        } else {
            searchInput.remove();
            if (resultsContainer) resultsContainer.remove();
        }
    });

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        if (resultsContainer) resultsContainer.remove();

        if (searchTerm.length < 3) return;

        const results = pintrendData.searchProducts(searchTerm);
        resultsContainer = document.createElement('div');
        resultsContainer.className = 'search-results';

        if (results.length === 0) {
            resultsContainer.innerHTML = `<p>No results found.</p>`;
        } else {
            resultsContainer.innerHTML = results.map(product => `
                <a href="product-detail.html?id=${product.id}" class="search-result">
                    <img src="${product.image}" alt="${product.name}" class="search-result-img">
                    <div class="search-result-info">
                        <h4>${product.name}</h4>
                        <p>₹${product.price.inr} • ${product.category}</p>
                    </div>
                </a>
            `).join('');
        }

        document.body.appendChild(resultsContainer);
    });

    // Close search if click outside
    document.addEventListener('click', (e) => {
        if (!searchIcon.contains(e.target) && !searchInput.contains(e.target)) {
            if (searchInput) searchInput.remove();
            if (resultsContainer) resultsContainer.remove();
        }
    });
}

// Setup mobile hamburger menu
export function setupHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Setup global Add to Cart buttons (in any loaded section)
function setupAddToCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        if (!button.disabled) {
            button.addEventListener('click', () => {
                const productId = button.dataset.productId;
                const product = pintrendData.getProductById(productId);
                if (!product) return;

                pintrendData.addToCart(productId);
                updateCartCount();
                alert(`${product.name} added to cart!`);
            });
        }
    });
}

// Init everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    setupSearch();
    setupHamburger();
    setupAddToCartButtons();
});
