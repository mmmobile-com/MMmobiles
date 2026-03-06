// ================================================
// MM Mobiles - JavaScript Functionality
// ================================================

// Products Data
const products = [
    {
        id: 1,
        name: "iPhone 15",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
        specs: "8GB RAM | 128GB Storage",
        price: "₹79,900",
        rating: 5,
        camera: "48MP Main Camera",
        battery: "3349 mAh",
        storage: "128GB / 256GB / 512GB",
        display: "6.1-inch Super Retina XDR",
        processor: "A16 Bionic Chip"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
        specs: "8GB RAM | 256GB Storage",
        price: "₹79,999",
        rating: 5,
        camera: "50MP Main Camera",
        battery: "4000 mAh",
        storage: "256GB / 512GB",
        display: "6.2-inch Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 3,
        name: "OnePlus 12",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        specs: "12GB RAM | 256GB Storage",
        price: "₹64,999",
        rating: 5,
        camera: "50MP Main Camera",
        battery: "5400 mAh",
        storage: "256GB / 512GB",
        display: "6.82-inch LTPO AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 4,
        name: "Xiaomi Redmi Note 13 Pro",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
        specs: "8GB RAM | 128GB Storage",
        price: "₹17,999",
        rating: 4,
        camera: "200MP Main Camera",
        battery: "5100 mAh",
        storage: "128GB / 256GB",
        display: "6.67-inch AMOLED",
        processor: "Snapdragon 7s Gen 2"
    },
    {
        id: 5,
        name: "Vivo V30",
        brand: "vivo",
        brandDisplay: "Vivo",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400&h=400&fit=crop",
        specs: "8GB RAM | 128GB Storage",
        price: "₹28,999",
        rating: 4,
        camera: "50MP Main Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.78-inch AMOLED",
        processor: "Snapdragon 7 Gen 3"
    },
    {
        id: 6,
        name: "Oppo Reno 11",
        brand: "oppo",
        brandDisplay: "Oppo",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
        specs: "8GB RAM | 128GB Storage",
        price: "₹29,999",
        rating: 4,
        camera: "50MP Main Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.7-inch AMOLED",
        processor: "Dimensity 7050"
    },
    {
        id: 7,
        name: "iPhone 15 Pro Max",
        brand: "apple",
        brandDisplay: "Apple",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
        specs: "8GB RAM | 256GB Storage",
        price: "₹1,59,900",
        rating: 5,
        camera: "48MP Main Camera",
        battery: "4422 mAh",
        storage: "256GB / 512GB / 1TB",
        display: "6.7-inch Super Retina XDR",
        processor: "A17 Pro Chip"
    },
    {
        id: 8,
        name: "Samsung Galaxy S24 Ultra",
        brand: "samsung",
        brandDisplay: "Samsung",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
        specs: "12GB RAM | 256GB Storage",
        price: "₹1,29,999",
        rating: 5,
        camera: "200MP Main Camera",
        battery: "5000 mAh",
        storage: "256GB / 512GB / 1TB",
        display: "6.8-inch Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 9,
        name: "Xiaomi 14 Ultra",
        brand: "xiaomi",
        brandDisplay: "Xiaomi",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
        specs: "12GB RAM | 256GB Storage",
        price: "₹99,999",
        rating: 5,
        camera: "50MP Main Camera",
        battery: "5300 mAh",
        storage: "256GB / 512GB",
        display: "6.73-inch LTPO AMOLED",
        processor: "Snapdragon 8 Gen 3"
    },
    {
        id: 10,
        name: "OnePlus Nord 3",
        brand: "oneplus",
        brandDisplay: "OnePlus",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
        specs: "8GB RAM | 128GB Storage",
        price: "₹33,999",
        rating: 4,
        camera: "50MP Main Camera",
        battery: "5000 mAh",
        storage: "128GB / 256GB",
        display: "6.74-inch AMOLED",
        processor: "Dimensity 9000"
    }
];

// Accessories Data
const accessories = [
    {
        id: 1,
        name: "Fast Charger 65W",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop",
        price: "₹1,299",
        brand: "Original"
    },
    {
        id: 2,
        name: "Wireless Earbuds Pro",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
        price: "₹2,499",
        brand: "Original"
    },
    {
        id: 3,
        name: "Power Bank 20000mAh",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
        price: "₹1,799",
        brand: "Original"
    },
    {
        id: 4,
        name: "Premium Silicone Case",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
        price: "₹599",
        brand: "Original"
    },
    {
        id: 5,
        name: "Tempered Glass Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400&h=400&fit=crop",
        price: "₹299",
        brand: "Original"
    },
    {
        id: 6,
        name: "USB-C Charging Cable",
        category: "charger",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop",
        price: "₹499",
        brand: "Original"
    },
    {
        id: 7,
        name: "Neckband Earphones",
        category: "earphone",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
        price: "₹999",
        brand: "Original"
    },
    {
        id: 8,
        name: "Mini Power Bank 10000mAh",
        category: "powerbank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
        price: "₹899",
        brand: "Original"
    },
    {
        id: 9,
        name: "Hard Case Cover",
        category: "case",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
        price: "₹349",
        brand: "Original"
    },
    {
        id: 10,
        name: "Privacy Screen Guard",
        category: "guard",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886b8f?w=400&h=400&fit=crop",
        price: "₹399",
        brand: "Original"
    }
];

// Reviews Data
let reviews = [
    {
        id: 1,
        name: "Ravi Teja",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
        text: "Best mobile shop in Choutuppal! Bought iPhone 15 from here. Great service and authentic products. Highly recommended!",
        date: "2024-01-15"
    },
    {
        id: 2,
        name: "Lakshmi Devi",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 5,
        text: "Excellent repair service! Got my Samsung screen replaced within 2 hours. Very professional staff.",
        date: "2024-01-10"
    },
    {
        id: 3,
        name: "Naveen Kumar",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        rating: 5,
        text: "Amazing collection of phones and accessories. Staff is very helpful. Will definitely buy more from here!",
        date: "2024-01-05"
    }
];

// Cart
let cart = [];

// ================================================
// Initialization
// ================================================
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    renderAccessories(accessories);
    renderReviews();
    initScrollEffects();
    
    // Show home section by default
    showSection('home');
});

// ================================================
// Section Navigation
// ================================================
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        
        // Scroll to top of section
        window.scrollTo({
            top: selectedSection.offsetTop - 80,
            behavior: 'smooth'
        });
    }
    
    // Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu
    closeMobileMenu();
}

// ================================================
// Products Functions
// ================================================
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    
    if (productsToRender.length === 0) {
        grid.innerHTML = '<div class="no-products"><p>No products found</p></div>';
        return;
    }
    
    grid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-brand="${product.brand}">
            <div class="product-image">
                <span class="product-badge">New</span>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brandDisplay}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span>(${product.rating}.0)</span>
                </div>
                <div class="product-specs">
                    <span><i class="fas fa-microchip"></i> ${product.specs}</span>
                </div>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, 'product')">
                        <i class="fas fa-shopping-cart"></i> Buy Now
                    </button>
                    <button class="btn btn-primary" onclick="viewDetails(${product.id})" style="background: var(--primary);">
                        <i class="fas fa-eye"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function filterProducts(brand) {
    // Update active filter button
    document.querySelectorAll('.filter-buttons .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter products
    if (brand === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.brand === brand);
        renderProducts(filtered);
    }
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput') || document.getElementById('mobileSearchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    if (!searchTerm) {
        // If we're on products section, show all products
        if (document.getElementById('products').classList.contains('active')) {
            renderProducts(products);
        }
        return;
    }
    
    // Search in products
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.brandDisplay.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filtered);
}

// Search on Enter key
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// ================================================
// Accessories Functions
// ================================================
function renderAccessories(accessoriesToRender) {
    const grid = document.getElementById('accessoriesGrid');
    
    if (accessoriesToRender.length === 0) {
        grid.innerHTML = '<div class="no-products"><p>No accessories found</p></div>';
        return;
    }
    
    grid.innerHTML = accessoriesToRender.map(accessory => `
        <div class="product-card" data-category="${accessory.category}">
            <div class="product-image">
                <span class="product-badge">Accessory</span>
                <img src="${accessory.image}" alt="${accessory.name}">
            </div>
            <div class="product-info">
                <div class="product-brand">${accessory.brand}</div>
                <h3 class="product-name">${accessory.name}</h3>
                <div class="product-price">${accessory.price}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${accessory.id}, 'accessory')">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterAccessories(category) {
    // Update active filter button
    document.querySelectorAll('#accessories .filter-buttons .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter accessories
    if (category === 'all') {
        renderAccessories(accessories);
    } else {
        const filtered = accessories.filter(a => a.category === category);
        renderAccessories(filtered);
    }
}

// ================================================
// Modal Functions
// ================================================
function viewDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="modal-details">
                <div class="modal-brand">${product.brandDisplay}</div>
                <h2>${product.name}</h2>
                <div class="product-rating" style="margin-bottom: 15px;">
                    ${renderStars(product.rating)}
                    <span>(${product.rating}.0)</span>
                </div>
                <div class="modal-price">${product.price}</div>
                
                <div class="modal-specs">
                    <h3>Specifications</h3>
                    <div class="spec-item">
                        <i class="fas fa-camera"></i>
                        <span>${product.camera}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-battery-full"></i>
                        <span>${product.battery}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-hdd"></i>
                        <span>${product.storage}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-mobile-alt"></i>
                        <span>${product.display}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-microchip"></i>
                        <span>${product.processor}</span>
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}, 'product'); closeModal();">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <a href="https://wa.me/919705552733?text=I'm interested in ${product.name}" target="_blank" class="btn btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp Inquiry
                    </a>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('productModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ================================================
// Cart Functions
// ================================================
function addToCart(id, type) {
    let item;
    if (type === 'product') {
        item = products.find(p => p.id === id);
    } else {
        item = accessories.find(a => a.id === id);
    }
    
    if (item) {
        cart.push(item);
        alert(`${item.name} added to cart!`);
    }
}

// ================================================
// Rating System
// ================================================
let currentRating = 0;

function setRating(rating) {
    currentRating = rating;
    const stars = document.querySelectorAll('#ratingStars i');
    
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Star hover effect
document.querySelectorAll('#ratingStars i').forEach(star => {
    star.addEventListener('mouseenter', function() {
        const rating = parseInt(this.dataset.rating);
        const stars = document.querySelectorAll('#ratingStars i');
        
        stars.forEach((s, index) => {
            if (index < rating) {
                s.style.color = '#FFD700';
            } else {
                s.style.color = '#ddd';
            }
        });
    });
    
    star.addEventListener('mouseleave', function() {
        const stars = document.querySelectorAll('#ratingStars i');
        stars.forEach((s, index) => {
            if (index < currentRating) {
                s.style.color = '#FFD700';
            } else {
                s.style.color = '#ddd';
            }
        });
    });
});

// ================================================
// Review Submission
// ================================================
function submitReview(e) {
    e.preventDefault();
    
    const name = document.getElementById('reviewerName').value;
    const reviewText = document.getElementById('reviewText').value;
    const fileInput = document.getElementById('reviewerPhoto');
    
    if (currentRating === 0) {
        alert('Please select a rating');
        return;
    }
    
    let photoUrl = '';
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            createReviewCard(name, e.target.result, currentRating, reviewText);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        createReviewCard(name, null, currentRating, reviewText);
    }
}

function createReviewCard(name, photo, rating, text) {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    
    const photoHtml = photo 
        ? `<img src="${photo}" alt="${name}">`
        : `<i class="fas fa-user"></i>`;
    
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    
    reviewCard.innerHTML = `
        <div class="review-header">
            <div class="reviewer-photo">
                ${photoHtml}
            </div>
            <div>
                <h4>${name}</h4>
                <div class="review-stars">
                    ${starsHtml}
                </div>
            </div>
        </div>
        <p class="review-text">"${text}"</p>
    `;
    
    const reviewsGrid = document.getElementById('reviewsGrid');
    reviewsGrid.insertBefore(reviewCard, reviewsGrid.firstChild);
    
    // Reset form
    document.getElementById('reviewForm').reset();
    currentRating = 0;
    document.querySelectorAll('#ratingStars i').forEach(star => {
        star.classList.remove('active');
    });
    
    alert('Thank you for your review!');
}

function renderReviews() {
    const grid = document.getElementById('reviewsGrid');
    
    grid.innerHTML = reviews.map(review => {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }
        
        const photoHtml = review.photo 
            ? `<img src="${review.photo}" alt="${review.name}">`
            : `<i class="fas fa-user"></i>`;
        
        return `
            <div class="review-card">
                <div class="review-header">
                    <div class="reviewer-photo">
                        ${photoHtml}
                    </div>
                    <div>
                        <h4>${review.name}</h4>
                        <div class="review-stars">
                            ${starsHtml}
                        </div>
                    </div>
                </div>
                <p class="review-text">"${review.text}"</p>
            </div>
        `;
    }).join('');
}

// ================================================
// Mobile Menu
// ================================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// ================================================
// Scroll Effects
// ================================================
function initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ================================================
// Smooth Scrolling for Navigation Links
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#') {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

