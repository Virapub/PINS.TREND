// data.js
// Product data and utility methods for PINSTREND website

const pintrendData = {
  // Cart (load from localStorage if available)
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  // Product List
  products: [
    {
      id: "collapsible-electric-kettle",
      name: "Collapsible Electric Kettle",
      description: "Space-saving collapsible kettle with auto shut-off and boil-dry protection",
      price: { inr: 1499, usd: 17.51 },
      image: "https://m.media-amazon.com/images/I/61WQVNM0LCL._SL1500_.jpg",
      link: "https://amzn.to/448SSZx",
      page: "products.html#collapsible-electric-kettle",
      category: "Appliances",
      rating: 4.5,
      features: ["Collapsible design", "800W power", "BPA-free materials"],
      stock: 50
    },
    {
      id: "automatic-soap-dispenser",
      name: "Automatic Soap Dispenser",
      description: "Touchless soap dispenser with infrared sensor for hygienic use",
      price: { inr: 1388, usd: 16.21 },
      image: "https://m.media-amazon.com/images/I/61Vqx4KEHuL._SL1024_.jpg",
      link: "https://amzn.to/46sLIRc",
      page: "products.html#automatic-soap-dispenser",
      category: "Smart Gadgets",
      rating: 4.2,
      features: ["Touchless operation", "Battery powered", "Adjustable soap volume"],
      stock: 30
    },
    {
      id: "magnetic-fridge-shelf",
      name: "Magnetic Fridge Shelf Rack",
      description: "Extra storage space that attaches magnetically to your fridge",
      price: { inr: 1199, usd: 14.0 },
      image: "https://m.media-amazon.com/images/I/81gCEjDOpSL._SL1500_.jpg",
      link: "https://amzn.to/44rEZEO",
      page: "products.html#magnetic-fridge-shelf",
      category: "Storage",
      rating: 4.3,
      features: ["Strong magnets", "Adjustable width", "Easy to clean"],
      stock: 40
    },
    {
    id: "fridge-organizer-bins",
    name: "Fridge Organizer Bins (Clear, Stackable)",
    description: "Set of clear plastic bins for better fridge organization",
    price: { inr: 2395, usd: 27.97 },
    image: "https://m.media-amazon.com/images/I/71S+IrhvQPL._SL1500_.jpg",
    link: "https://amzn.to/3I98vaY",
    page: "products.html#fridge-organizer-bins",
    category: "Storage",
    rating: 4.6,
    features: ["Stackable design", "See-through material", "Easy-grip handles"],
    stock: 50
  },
  {
    id: "smart-trash-can",
    name: "Smart Trash Can with Motion Sensor",
    description: "Automatic opening trash can with touch-free operation",
    price: { inr: 2999, usd: 35.03 },
    image: "https://m.media-amazon.com/images/I/615kYHdRG0L._SL1500_.jpg",
    link: "https://amzn.to/4euARZe",
    page: "products.html#smart-trash-can",
    category: "Smart Gadgets",
    rating: 4.4,
    features: ["Motion sensor", "Battery operated", "Odor control"],
    stock: 40
  },
  {
    id: "electric-jar-opener",
    name: "Electric Jar Opener",
    description: "Battery-powered device that opens tight jar lids effortlessly",
    price: { inr: 1571, usd: 18.35 },
    image: "https://m.media-amazon.com/images/I/71XbxJC8QLL._SL1500_.jpg",
    link: "https://amzn.to/44sVwbo",
    page: "products.html#electric-jar-opener",
    category: "Helpers",
    rating: 4.1,
    features: ["One-touch operation", "Non-slip grip", "Works on most jars"],
    stock: 50
  }
  ],

  // Method: Get cart items
  getCartItems() {
    return this.cart;
  },

  // Method: Get product by ID
  getProductById(productId) {
    return this.products.find(p => p.id === productId);
  },

  // Method: Search products by name or category
  searchProducts(term) {
    const lower = term.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(lower) ||
      product.category.toLowerCase().includes(lower)
    );
  },

  // Method: Add product to cart
  addToCart(productId) {
    const product = this.getProductById(productId);
    if (!product) return;

    if (product.stock > 0) {
      const existing = this.cart.find(item => item.id === productId);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        this.cart.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1
        });
      }

      product.stock -= 1;
      localStorage.setItem("cart", JSON.stringify(this.cart));
    } else {
      alert("Sorry, this product is out of stock!");
    }
  }
};

export default pintrendData;
