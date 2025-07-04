// data.js
// Product data and utility methods for PINSTREND website

const pintrendData = {
  // Cart: loaded from localStorage if available
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  // Product List (you can expand this)
  products: [
  {
    id: "product-soap-dispenser",
    name: "Automatic Soap Dispenser",
    priceINR: 1388,
    priceUSD: 17,
    link: "https://amzn.to/46sLIRc"
  },
  {
    id: "fridge-organizer-bins",
    name: "Fridge Organizer Bins (Clear, Stackable)",
    priceINR: 2395,
    priceUSD: 27.97,
    link: "https://amzn.to/3I98vaY"
  },
  {
    id: "smart-trash-can",
    name: "Smart Trash Can with Motion Sensor",
    priceINR: 2999,
    priceUSD: 35.03,
    link: "https://amzn.to/4euARZe"
  },
  {
    id: "electric-jar-opener",
    name: "Electric Jar Opener",
    priceINR: 1571,
    priceUSD: 18.35,
    link: "https://amzn.to/44sVwbo"
  },
  {
    id: "automatic-oil-dispenser",
    name: "Automatic Oil Dispenser Bottle (with sensor)",
    priceINR: 304,
    priceUSD: 3.55,
    link: "https://amzn.to/3In9G6p"
  },
  {
    id: "roll-up-drying-rack",
    name: "Roll-Up Over-Sink Drying Rack",
    priceINR: 649,
    priceUSD: 7.58,
    link: "https://amzn.to/3GpXMIo"
  },
  {
    id: "microwave-cleaner",
    name: "Microwave Cleaner Steamer (Angry Mama Style)",
    priceINR: 399,
    priceUSD: 4.66,
    link: "https://amzn.to/4nuE7rE"
  },
  {
    id: "mini-ice-tray",
    name: "Mini Ice Cube Tray with Lid & Scoop",
    priceINR: 745,
    priceUSD: 8.70,
    link: "https://amzn.to/4klNqY9"
  },
  {
    id: "cutting-board-drain",
    name: "2-in-1 Cutting Board with Drain Tray",
    priceINR: 3397,
    priceUSD: 39.68,
    link: "https://amzn.to/4lbuc8R"
  },
  {
    id: "automatic-pan-stirrer",
    name: "Automatic Pan Stirrer with Timer",
    priceINR: 1299,
    priceUSD: 15.17,
    link: "https://amzn.to/44rdDOR"
  },
  {
    id: "grain-dispenser",
    name: "Wall-Mounted Rice & Grain Dispenser",
    priceINR: 2299,
    priceUSD: 26.85,
    link: "https://amzn.to/4lBVDsk"
  },
  {
    id: "milk-frother",
    name: "Electric Milk Frother Wand",
    priceINR: 1299,
    priceUSD: 15.17,
    link: "https://amzn.to/4eycpWQ"
  },
  {
    id: "digital-measuring-spoon",
    name: "Digital Measuring Spoon",
    priceINR: 999,
    priceUSD: 11.67,
    link: "https://amzn.to/45LPtkF"
  },
  {
    id: "silicone-food-covers",
    name: "Silicone Food Covers (Stretch Lids)",
    priceINR: 228,
    priceUSD: 2.66,
    link: "https://amzn.to/4ljDu2o"
  },
  {
    id: "magnetic-measuring-spoons",
    name: "Magnetic Measuring Spoons Set",
    priceINR: 3960,
    priceUSD: 46.25,
    link: "https://amzn.to/4lx0DOF"
  },
  {
    id: "electric-garlic-chopper",
    name: "Mini Electric Garlic Chopper",
    priceINR: 1199,
    priceUSD: 14.00,
    link: "https://amzn.to/4lTqxwv"
  },
  {
    id: "under-shelf-basket",
    name: "Cupboard/Under-Shelf Basket Organizer",
    priceINR: 527,
    priceUSD: 6.15,
    link: "https://amzn.to/400tdQd"
  },
  {
    id: "airfryer-liners",
    name: "Silicone Air Fryer Liners (Reusable)",
    priceINR: 579,
    priceUSD: 6.76,
    link: "https://amzn.to/4km5dOF"
  },
  {
    id: "inkbird-thermometer",
    name: "INKBIRD Bluetooth Meat Thermometer",
    priceINR: 2090,
    priceUSD: 25.18,
    link: "https://amzn.to/3TjlTvu"
  },
  {
    id: "bbq-grill-gloves",
    name: "BBQGO BBQ Grill Gloves",
    priceINR: 1292,
    priceUSD: 15.57,
    link: "https://amzn.to/3ZTGlXp"
  },
  {
    id: "breakfast-sandwich-maker",
    name: "Electric Breakfast Sandwich Maker",
    priceINR: 5699,
    priceUSD: 68.66,
    link: "https://amzn.to/3TRB1Ae"
  },
  {
    id: "mini-food-chopper",
    name: "Mini Food Chopper",
    priceINR: 3700,
    priceUSD: 44.58,
    link: "https://amzn.to/3ZXneM8"
  },
  {
    id: "smart-measuring-spoon",
    name: "Smart Measuring Spoon/Scale",
    priceINR: 1199,
    priceUSD: 14.45,
    link: "https://amzn.to/4l6Z1eD"
  },
  {
    id: "automatic-stirring-pot",
    name: "Automatic Stirring Pot Tool",
    priceINR: 13476,
    priceUSD: 162.36,
    link: "https://amzn.to/4kljH1o"
  },
  {
    id: "magnetic-spice-rack",
    name: "Magnetic Spice Rack Organizer",
    priceINR: 2299,
    priceUSD: 27.70,
    link: "https://amzn.to/40xGaBh"
  },
  {
    id: "vegetable-slicer",
    name: "Multi-Function Vegetable Slicer",
    priceINR: 3499,
    priceUSD: 42.16,
    link: "https://amzn.to/40y9ebL"
  },
  {
    id: "under-cabinet-lighting",
    name: "Under Cabinet Lighting (Rechargeable)",
    priceINR: 699,
    priceUSD: 8.42,
    link: "https://amzn.to/3I92T05"
  },
  {
    id: "silicone-zipper-bags",
    name: "Reusable Silicone Zip Bags",
    priceINR: 700,
    priceUSD: 8.43,
    link: "https://amzn.to/4keOzR1"
  },
  {
    id: "tap-water-filter",
    name: "Smart Tap Water Filter Dispenser",
    priceINR: 299,
    priceUSD: 3.60,
    link: "https://amzn.to/4etDQBd"
  },
  {
    id: "breakfast-maker",
    name: "3-in-1 Breakfast Maker",
    priceINR: 8000,
    priceUSD: 95.99,
    link: "https://amzn.to/45K1VkQ"
  },
  {
    id: "prestige-multi-cooker",
    name: "Prestige Multi-Cooker 1.5L",
    priceINR: 2500,
    priceUSD: 29.99,
    link: "https://amzn.to/4kll3ZT"
  },
  {
    id: "atomberg-mixer",
    name: "Atomberg Zenova Mixer Grinder",
    priceINR: 7000,
    priceUSD: 84.99,
    link: "https://amzn.to/4ex7lCf"
  },
  {
    id: "philips-air-fryer",
    name: "Philips Air Fryer",
    priceINR: 10000,
    priceUSD: 120.00,
    link: "https://amzn.to/4kgzH4R"
  },
  {
    id: "sliding-tray",
    name: "Sliding Tray",
    priceINR: 1000,
    priceUSD: 11.99,
    link: "https://amzn.to/3SS1XQ4"
  },
  {
    id: "vacuum-sealer",
    name: "Vacuum Sealer",
    priceINR: 3000,
    priceUSD: 35.99,
    link: "https://amzn.to/3SVcs54"
  },
  {
    id: "mini-sealing-machine",
    name: "Mini Sealing Machine",
    priceINR: 500,
    priceUSD: 3.59,
    link: "https://amzn.to/4k1PTqE"
  },
  {
    id: "kitchen-mat",
    name: "Kitchen Mat",
    priceINR: 700,
    priceUSD: 8.39,
    link: "https://amzn.to/3HG0ry2"
  },
  {
    id: "knife-sharpener",
    name: "Knife Sharpener",
    priceINR: 250,
    priceUSD: 2.99,
    link: "https://amzn.to/45TExRW"
  },
  {
    id: "product-soap-dispenser",
    name: "Automatic Soap Dispenser",
    priceINR: 1388,
    priceUSD: 17,
    link: "https://amzn.to/46sLIRc"
  },
  {
    id: "product-fridge-shelf",
    name: "Magnetic Fridge Shelf Rack",
    priceINR: 1199,
    priceUSD: 14,
    link: "https://amzn.to/44rEZEO"
  },
  {
    id: "product-fridge-bins",
    name: "Fridge Organizer Bins (Clear, Stackable)",
    priceINR: 2395,
    priceUSD: 29,
    link: "https://amzn.to/3I98vaY"
  },
  {
    id: "product-smart-trashcan",
    name: "Smart Trash Can with Motion Sensor",
    priceINR: 2999,
    priceUSD: 36,
    link: "https://amzn.to/4euARZe"
  },
  {
    id: "product-electric-jar-opener",
    name: "Electric Jar Opener",
    priceINR: 1571,
    priceUSD: 19,
    link: "https://amzn.to/44sVwbo"
  },
  {
    id: "product-oil-dispenser",
    name: "Automatic Oil Dispenser Bottle (with sensor)",
    priceINR: 304,
    priceUSD: 4,
    link: "https://amzn.to/3In9G6p"
  },
  {
    id: "product-drying-rack",
    name: "Roll-Up Over-Sink Drying Rack",
    priceINR: 649,
    priceUSD: 8,
    link: "https://amzn.to/3GpXMIo"
  },
  {
    id: "product-microwave-cleaner",
    name: "Microwave Cleaner Steamer (Angry Mama Style)",
    priceINR: 399,
    priceUSD: 5,
    link: "https://amzn.to/4nuE7rE"
  },
  {
    id: "product-ice-tray",
    name: "Mini Ice Cube Tray with Lid & Scoop",
    priceINR: 745,
    priceUSD: 9,
    link: "https://amzn.to/4klNqY9"
  },
  {
    id: "product-steam-cleaner",
    name: "NexLev Steam Cleaner",
    priceINR: 0,
    priceUSD: 0,
    link: "https://amzn.to/44bqypt"
  },
  {
    id: "product-cutting-board",
    name: "2-in-1 Cutting Board with Drain Tray",
    priceINR: 3397,
    priceUSD: 41,
    link: "https://amzn.to/4lbuc8R"
  },
  {
    id: "product-pan-stirrer",
    name: "Automatic Pan Stirrer with Timer",
    priceINR: 1299,
    priceUSD: 16,
    link: "https://amzn.to/44rdDOR"
  },
  {
    id: "product-grain-dispenser",
    name: "Wall-Mounted Rice & Grain Dispenser",
    priceINR: 2299,
    priceUSD: 28,
    link: "https://amzn.to/4lBVDsk"
  },
  {
    id: "product-milk-frother",
    name: "Electric Milk Frother Wand",
    priceINR: 1299,
    priceUSD: 16,
    link: "https://amzn.to/4eycpWQ"
  },
  {
    id: "product-digital-spoon",
    name: "Digital Measuring Spoon",
    priceINR: 999,
    priceUSD: 12,
    link: "https://amzn.to/45LPtkF"
  },
  {
    id: "product-silicone-lids",
    name: "Silicone Food Covers (Stretch Lids)",
    priceINR: 228,
    priceUSD: 3,
    link: "https://amzn.to/4ljDu2o"
  },
  {
    id: "product-measuring-spoons",
    name: "Magnetic Measuring Spoons Set",
    priceINR: 3960,
    priceUSD: 48,
    link: "https://amzn.to/4lx0DOF"
  },
  {
    id: "product-garlic-chopper",
    name: "Mini Electric Garlic Chopper",
    priceINR: 1199,
    priceUSD: 14,
    link: "https://amzn.to/4lTqxwv"
  },
  {
    id: "product-shelf-organizer",
    name: "Cupboard/Under-Shelf Basket Organizer",
    priceINR: 527,
    priceUSD: 6,
    link: "https://amzn.to/400tdQd"
  },
  {
    id: "product-airfryer-liners",
    name: "Silicone Air Fryer Liners (Reusable)",
    priceINR: 579,
    priceUSD: 7,
    link: "https://amzn.to/4km5dOF"
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

