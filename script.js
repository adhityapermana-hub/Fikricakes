// Data produk kue
const products = [
    {
        id: 1,
        name: "Red Velvet Cake",
        category: "birthday",
        description: "Kue merah beludru lembut dengan krim keju yang creamy dan taburan cokelat.",
        price: "Rp 250.000",
        image: "https://cdn.prod.website-files.com/614a379840dbad1848e598c2/679906d29abceb2bbceb06b3_6799062816366d61273c52b4_IMG_1560.jpeg",
        bestSeller: true
    },
    {
        id: 2,
        name: "Chocolate Truffle Cake",
        category: "birthday",
        description: "Kue cokelat premium dengan lapisan truffle yang kaya dan lezat.",
        price: "Rp 250.000",
        image: "https://cdn.prod.website-files.com/614a379840dbad1848e598c2/679906d29abceb2bbceb06b3_6799062816366d61273c52b4_IMG_1560.jpeg",
        bestSeller: true
    },
    {
        id: 3,
        name: "Classic Wedding Cake",
        category: "wedding",
        description: "Kue pernikahan elegan dengan hiasan bunga dan dekorasi yang indah.",
        price: "Rp 250.000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStX_ebPIn8pSj9qrWmfmqibl56pkIYR4u2Uw&s",
        bestSeller: false
    },
    {
        id: 4,
        name: "Strawberry Shortcake",
        category: "birthday",
        description: "Kue lapis dengan krim segar dan potongan strawberry asli.",
        price: "Rp 250.000",
        image: "https://cdn.prod.website-files.com/614a379840dbad1848e598c2/679906d29abceb2bbceb06b3_6799062816366d61273c52b4_IMG_1560.jpeg",
        bestSeller: false
    },
    {
        id: 5,
        name: "Rainbow Cupcakes",
        category: "cupcake",
        description: "Set cupcake warna-warni dengan buttercream yang lembut dan manis.",
        price: "Rp 250.000",
        image: "https://cdn.prod.website-files.com/614a379840dbad1848e598c2/679906d29abceb2bbceb06b3_6799062816366d61273c52b4_IMG_1560.jpeg",
        bestSeller: true
    },
    {
        id: 6,
        name: "Chocolate Chip Cookies",
        category: "cookies",
        description: "Cookies renyah dengan choco chips yang melimpah, cocok untuk snack.",
        price: "Rp 250.000",
        image: "https://cdn.prod.website-files.com/614a379840dbad1848e598c2/679906d29abceb2bbceb06b3_6799062816366d61273c52b4_IMG_1560.jpeg",
        bestSeller: false
    },
    {
        id: 7,
        name: "Elegant Floral Cake",
        category: "wedding",
        description: "Kue dengan dekorasi bunga yang indah dan elegan untuk acara spesial.",
        price: "Rp 250.000",
        image: "https://cdn.prod.website-files.com/614a379840dbad1848e598c2/679906d29abceb2bbceb06b3_6799062816366d61273c52b4_IMG_1560.jpeg",
        bestSeller: false
    },
    {
        id: 8,
        name: "Birthday Special Cake",
        category: "birthday",
        description: "Kue ulang tahun spesial dengan dekorasi sesuai permintaan.",
        price: "Rp 250.000",
        image: "https://cdn.prod.website-files.com/614a379840dbad1848e598c2/679906d29abceb2bbceb06b3_6799062816366d61273c52b4_IMG_1560.jpeg",
        bestSeller: true
    }
];

// Inisialisasi AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);
    
    // Render produk
    renderProducts();
    renderBestSellers();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup filter kategori
    setupCategoryFilter();
});

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup filter kategori
function setupCategoryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Filter products
            const category = btn.getAttribute('data-category');
            filterProducts(category);
        });
    });
}

// Filter produk berdasarkan kategori
function filterProducts(category) {
    const menuGrid = document.querySelector('.menu-grid');
    
    // Clear current products
    menuGrid.innerHTML = '';
    
    // Filter products
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    // Render filtered products
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        menuGrid.appendChild(productCard);
    });
}

// Render semua produk
function renderProducts() {
    const menuGrid = document.querySelector('.menu-grid');
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        menuGrid.appendChild(productCard);
    });
}

// Render best sellers
function renderBestSellers() {
    const bestSellerGrid = document.querySelector('.best-seller-grid');
    const bestSellers = products.filter(product => product.bestSeller);
    
    bestSellers.forEach(product => {
        const bestSellerCard = createBestSellerCard(product);
        bestSellerGrid.appendChild(bestSellerCard);
    });
}

// Membuat card produk
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-aos', 'fade-up');
    
    card.innerHTML = `
        <div class="product-img">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">
                <span class="price">${product.price}</span>
                ${product.bestSeller ? '<span class="badge">Best Seller</span>' : ''}
            </div>
        </div>
    `;
    
    // Add hover effect
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
    
    return card;
}

// Membuat card best seller
function createBestSellerCard(product) {
    const card = document.createElement('div');
    card.className = 'best-seller-card';
    card.setAttribute('data-aos', 'zoom-in');
    
    card.innerHTML = `
        ${product.bestSeller ? '<div class="best-seller-badge">Best Seller</div>' : ''}
        <div class="product-img">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">
                <span class="price">${product.price}</span>
                <button class="btn" onclick="orderProduct('${product.name}')">Order Now</button>
            </div>
        </div>
    `;
    
    return card;
}

// Fungsi untuk memesan produk
function orderProduct(productName) {
    const message = `Halo Blissful Bakery, saya ingin memesan kue ${productName}. Bisa info ketersediaan dan detail harganya?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Add order function to window object
window.orderProduct = orderProduct;