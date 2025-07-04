// products.js
// Responsible for displaying product data and interactions

import pintrendData from './data.js';

// Display products in a given container by ID
export function displayFeaturedProducts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = pintrendData.products.map(product => `
    <div class="product-card">
      <a href="product-detail.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price.inr}</p>
        <p class="category">${product.category}</p>
        <button class="add-to-cart" data-product-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>
          ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </a>
    </div>
  `).join('');
}

// Display categories (based on existing products)
export function displayCategories(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const categories = [...new Set(pintrendData.products.map(p => p.category))];

  container.innerHTML = categories.map(category => `
    <div class="category-card">
      <h3>${category}</h3>
      <a href="products.html" class="btn">Explore</a>
    </div>
  `).join('');
}

// Export utility methods from data.js
export const getProductById = pintrendData.getProductById.bind(pintrendData);
export const addToCart = pintrendData.addToCart.bind(pintrendData);
export const updateCartCount = () => {
  const count = pintrendData.getCartItems().reduce((sum, item) => sum + (item.quantity || 1), 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
};
