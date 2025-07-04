// js/products.js

import pintrendData from '../data.js';

// Display featured or all products
export function displayFeaturedProducts(containerId = 'featuredProducts') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const products = pintrendData.products;

  container.innerHTML = products.map(product => `
    <div class="product-card">
      <a href="product-detail.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </a>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>₹${product.price.inr}</p>
        <button class="add-to-cart" data-product-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
          ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  `).join('');

  // Enable Add to Cart functionality
  container.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const product = pintrendData.getProductById(productId);
      if (product) {
        pintrendData.addToCart(productId);
        alert(`${product.name} added to cart!`);
      }
    });
  });
}

// Placeholder for category display if needed on homepage
export function displayCategories(containerId = 'categoryGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const categories = [...new Set(pintrendData.products.map(p => p.category))];

  container.innerHTML = categories.map(cat => `
    <div class="category-card">
      <h3>${cat}</h3>
    </div>
  `).join('');
}

// For product detail page
export function getProductById(id) {
  return pintrendData.getProductById(id);
}

export function addToCart(id) {
  return pintrendData.addToCart(id);
}

export function updateCartCount() {
  const totalItems = pintrendData.getCartItems().reduce((sum, item) => sum + (item.quantity || 1), 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = totalItems);
}
