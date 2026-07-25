/* =========================================
   DATOS DE PRODUCTOS (Backend simulado)
   ========================================= */
const dbProducts = [
    { id: 1, name: "Camiseta Urban White", price: 45900, category: "camisetas", desc: "Algodón 100% orgánico, corte clásico.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Camiseta+W" },
    { id: 2, name: "Jeans Slim Fit Black", price: 89900, category: "pantalones", desc: "Mezclilla elástica, máxima comodidad.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Jeans+B" },
    { id: 3, name: "Gorra Snapback Logo", price: 35000, category: "accesorios", desc: "Ajustable, bordado de alta calidad.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Gorra" },
    { id: 4, name: "Chaqueta Cortavientos", price: 120000, category: "camisetas", desc: "Impermeable, ideal para clima frío.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Chaqueta" },
    { id: 5, name: "Pantalón Jogger Beige", price: 75000, category: "pantalones", desc: "Estilo casual, cintura con cordón.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Jogger+B" },
    { id: 6, name: "Morral Porta Laptop", price: 110000, category: "accesorios", desc: "Múltiples compartimentos, ergonómico.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Morral" },
    { id: 7, name: "Camiseta Oversize Tie-Dye", price: 55000, category: "camisetas", desc: "Diseño único, tendencia urbana.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Tie-Dye" },
    { id: 8, name: "Cinturón de Lona Militar", price: 29900, category: "accesorios", desc: "Hebilla metálica, muy resistente.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Cinturon" },
    { id: 9, name: "Sudadera Hoodie con Capucha", price: 95000, category: "camisetas", desc: "Tela cepillada por dentro, muy suave.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Hoodie" },
    { id: 10, name: "Shorts de Verano Navy", price: 60000, category: "pantalones", desc: "Tela ligera, secado rápido.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Shorts" },
    { id: 11, name: "Gafas de Sol Unisex", price: 49900, category: "accesorios", desc: "Protección UV400, montura negra satinada.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Gafas" },
    { id: 12, name: "Polo Premium Azul", price: 65000, category: "camisetas", desc: "Cuello tejido, ajuste elegante.", img: "https://via.placeholder.com/250x250/eeeeee/001f3f?text=Polo+A" },
];

// Simulación de productos destacados (los primeros 3)
const dbFeatured = dbProducts.slice(0, 3);

// Formateador de moneda (COP)
const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
});

// Estado del Carrito (Cargar desde LocalStorage)
let cart = JSON.parse(localStorage.getItem('modaClickCart')) || [];

/* =========================================
   SELECTORES DOM PRINCIPALES
   ========================================= */
const featuredGrid = document.getElementById('featuredGrid');
const catalogGrid = document.getElementById('catalogGrid');
const cartCount = document.getElementById('cartCount');
const cartIconBtn = document.getElementById('cartIconBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const emptyCartBtn = document.getElementById('emptyCartBtn');
const productSearch = document.getElementById('productSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const backToTopBtn = document.getElementById('backToTop');
const toast = document.getElementById('toast');
const contactForm = document.getElementById('contactForm');

/* =========================================
   FUNCIONES DE INICIALIZACIÓN Y RENDER
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(dbFeatured, featuredGrid); // Render destacados
    renderProducts(dbProducts, catalogGrid);   // Render catálogo completo
    updateCartUI(); // Actualizar UI del carrito al cargar
    setupFormValidation();
});

// Función genérica para renderizar productos en una cuadrícula
function renderProducts(products, gridElement) {
    gridElement.innerHTML = ''; // Limpiar grilla
    if (products.length === 0) {
        gridElement.innerHTML = '<p class="text-muted text-center" style="grid-column: 1/-1;">No se encontraron productos.</p>';
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card card fade-in';
        productCard.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3>${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-price-row">
                    <span class="product-price">${formatter.format(product.price)}</span>
                    <button class="btn btn-primary btn-sm add-to-cart" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        gridElement.appendChild(productCard);
    });

    // Agregar event listeners a los nuevos botones
    const addBtns = gridElement.querySelectorAll('.add-to-cart');
    addBtns.forEach(btn => {
        btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
    });
}

/* =========================================
   LÓGICA DEL CARRITO DE COMPRAS
   ========================================= */

// Guardar carrito en LocalStorage
function saveCart() {
    localStorage.setItem('modaClickCart', JSON.stringify(cart));
}

// Agregar producto al carrito
function addToCart(productId) {
    // Buscar si ya existe en el carrito
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        // Buscar info completa del producto
        const product = dbProducts.find(p => p.id === productId);
        if (product) {
            cart.push({ ...product, quantity: 1 });
        }
    }

    saveCart();
    updateCartUI();
    showToast();
}

// Eliminar item completamente
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Cambiar cantidad (+ o -)
function changeQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        // Si baja a 0, eliminar
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Vaciar carrito
function emptyCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

// Actualizar toda la UI del Carrito (Contador, Sidebar, Total)
function updateCartUI() {
    // 1. Actualizar Contador en Nav
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    if (totalItems > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }

    // 2. Renderizar Items en Sidebar
    cartItemsContainer.innerHTML = '';
    let totalPyament = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Tu carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            totalPyament += itemSubtotal;

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${formatter.format(item.price)}</p>
                    <div class="cart-item-qty">
                        <button class="qty-btn minus" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <i class="fas fa-trash-alt remove-item" data-id="${item.id}"></i>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        // Event listeners para botones de items
        cartItemsContainer.querySelectorAll('.minus').forEach(btn => {
            btn.addEventListener('click', () => changeQuantity(parseInt(btn.dataset.id), -1));
        });
        cartItemsContainer.querySelectorAll('.plus').forEach(btn => {
            btn.addEventListener('click', () => changeQuantity(parseInt(btn.dataset.id), 1));
        });
        cartItemsContainer.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
        });
    }

    // 3. Actualizar Total
    cartTotalPrice.textContent = formatter.format(totalPyament);
}

// Interacciones Abrir/Cerrar Carrito
cartIconBtn.addEventListener('click', () => cartModal.classList.add('open'));
closeCart.addEventListener('click', () => cartModal.classList.remove('open'));
// Cerrar al hacer click fuera del contenido
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.classList.remove('open');
});

// Botón Vaciar
emptyCartBtn.addEventListener('click', emptyCart);

/* =========================================
   EXTRAS: BÚSQUEDA Y FILTROS
   ========================================= */

// Lógica de Búsqueda
productSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    const filtered = dbProducts.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.desc.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered, catalogGrid);
});

// Lógica de Filtros por Categoría
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Cambiar clase active
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const category = btn.dataset.category;
        if (category === 'all') {
            renderProducts(dbProducts, catalogGrid);
        } else {
            const filtered = dbProducts.filter(p => p.category === category);
            renderProducts(filtered, catalogGrid);
        }
    });
});

/* =========================================
   EXTRAS: UI Y ANIMACIONES SCROLL
   ========================================= */

// Menu Móvil Toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Cerrar menu movil al clickear un link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Back to Top y Nav activa en scroll
window.addEventListener('scroll', () => {
    // Back to Top button
    if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }

    // Cambiar link activo en nav
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
    
    // Animaciones al scroll
    const animables = document.querySelectorAll('.fade-in-scroll');
    const triggerBottom = window.innerHeight / 5 * 4;
    
    animables.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if(itemTop < triggerBottom) {
            item.classList.add('appear');
        }
    });

});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

// Mostrar Toast
function showToast() {
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/* =========================================
   VALIDACIÓN DE FORMULARIO DE CONTACTO
   ========================================= */
function setupFormValidation() {
    if(!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // No recargar

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const successMsg = document.getElementById('formSuccess');
        let isValid = true;

        // Reset mensajes anteriores
        document.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('error'));
        successMsg.style.display = 'none';

        // Validar Nombre
        if (name.value.trim().length < 3) {
            showError(name, 'El nombre debe tener al menos 3 caracteres.');
            isValid = false;
        }

        // Validar Email
        if (!isValidEmail(email.value.trim())) {
            showError(email, 'Ingresa un correo electrónico válido.');
            isValid = false;
        }

        // Validar Mensaje
        if (message.value.trim().length < 10) {
            showError(message, 'El mensaje debe tener al menos 10 caracteres.');
            isValid = false;
        }

        if (isValid) {
            // Simulación de envío exitoso
            successMsg.style.display = 'block';
            contactForm.reset();
            // Ocultar mensaje después de 5s
            setTimeout(() => successMsg.style.display = 'none', 5000);
        }
    });

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('error');
        const errorElement = formGroup.querySelector('.error-msg');
        errorElement.textContent = message;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}