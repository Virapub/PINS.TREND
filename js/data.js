// data.js
// Product data and utility methods for PINSTREND website

const pintrendData = {
  // Cart: loaded from localStorage if available
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  // Product List (you can expand this)
  products: [
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
    stock: 50
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
  },
  {
    id: "automatic-oil-dispenser",
    name: "Automatic Oil Dispenser Bottle (with sensor)",
    description: "Touch-free oil dispenser with precise measurement",
    price: { inr: 304, usd: 3.55 },
    image: "https://m.media-amazon.com/images/I/814ea9qZTML._SL1500_.jpg",
    link: "https://amzn.to/3In9G6p",
    page: "products.html#automatic-oil-dispenser",
    category: "Smart Gadgets",
    rating: 4.0,
    features: ["No-drip spout", "Adjustable flow", "Battery included"],
    stock: 50
  },
  {
    id: "roll-up-drying-rack",
    name: "Roll-Up Over-Sink Drying Rack",
    description: "Space-saving drying rack that fits over your sink",
    price: { inr: 649, usd: 7.58 },
    image: "https://m.media-amazon.com/images/I/81lEuQodtVL._SL1466_.jpg",
    link: "https://amzn.to/3GpXMIo",
    page: "products.html#roll-up-drying-rack",
    category: "Storage",
    rating: 4.2,
    features: ["Collapsible design", "Stainless steel", "Drip tray included"],
    stock: 50
  },
  {
    id: "microwave-cleaner",
    name: "Microwave Cleaner Steamer (Angry Mama Style)",
    description: "Easy way to clean your microwave with steam",
    price: { inr: 399, usd: 4.66 },
    image: "https://m.media-amazon.com/images/I/61PvRIsez6L._SL1500_.jpg",
    link: "https://amzn.to/4nuE7rE",
    page: "products.html#microwave-cleaner",
    category: "Cleaning",
    rating: 4.3,
    features: ["Non-toxic cleaning", "Reusable", "Fun design"],
    stock: 50
  },
  {
    id: "mini-ice-tray",
    name: "Mini Ice Cube Tray with Lid & Scoop",
    description: "Silicone ice cube tray with lid and scoop for easy use",
    price: { inr: 745, usd: 8.70 },
    image: "https://m.media-amazon.com/images/I/71Ce4GiWbZL._SL1500_.jpg",
    link: "https://amzn.to/4klNqY9",
    page: "products.html#mini-ice-tray",
    category: "Accessories",
    rating: 4.5,
    features: ["Flexible silicone", "Leak-proof lid", "Includes scoop"],
    stock: 50
  },
  {
    id: "cutting-board-drain",
    name: "2-in-1 Cutting Board with Drain Tray",
    description: "Cutting board with built-in drain tray for juices",
    price: { inr: 3397, usd: 39.68 },
    image: "https://m.media-amazon.com/images/I/71lTRNr2zmL._SL1500_.jpg",
    link: "https://amzn.to/4lbuc8R",
    page: "products.html#cutting-board-drain",
    category: "Prep Tools",
    rating: 4.4,
    features: ["Non-slip base", "Dishwasher safe", "Juice groove"],
    stock: 50
  },
  {
    id: "automatic-pan-stirrer",
    name: "Automatic Pan Stirrer with Timer",
    description: "Hands-free stirring for sauces and other dishes",
    price: { inr: 1299, usd: 15.17 },
    image: "https://m.media-amazon.com/images/I/51PuutE8okL._SL1500_.jpg",
    link: "https://amzn.to/44rdDOR",
    page: "products.html#automatic-pan-stirrer",
    category: "Cooking",
    rating: 3.9,
    features: ["Adjustable speed", "Timer function", "Non-stick paddles"],
    stock: 50
  },
  {
    id: "grain-dispenser",
    name: "Wall-Mounted Rice & Grain Dispenser",
    description: "Convenient dispenser for rice, grains and cereals",
    price: { inr: 2299, usd: 26.85 },
    image: "https://m.media-amazon.com/images/I/51emxzXRleL._SL1000_.jpg",
    link: "https://amzn.to/4lBVDsk",
    page: "products.html#grain-dispenser",
    category: "Storage",
    rating: 4.2,
    features: ["Wall mounted", "Clear container", "Easy-pour spout"],
    stock: 50
  }
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

  // Method: Search products
  searchProducts(term) {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase()) ||
      product.category.toLowerCase().includes(term.toLowerCase())
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
