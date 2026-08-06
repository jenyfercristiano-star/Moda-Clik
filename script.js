/* ==========================================================================
   MODA CLICK - COLECCIÓN OPHIDEA | LÓGICA DE INTERACCIÓN & CARRITO
   ========================================================================== */

// Base de Datos de Productos OPHIDEA (20 Productos Reales sin Placeholders)
const ophideaProducts = [
    {
        id: 1,
        name: "Vestido Serpentine Gold",
        category: "vestidos",
        price: 480,
        rating: 5,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
        description: "Vestido de noche en seda drapeada con aplicaciones metálicas doradas en forma de escama.",
        colors: ["#D4AF37", "#0B0B0B"],
        sizes: ["XS", "S", "M", "L"]
    },
    {
        id: 2,
        name: "Blazer Estructura Cobra",
        category: "chaquetas",
        price: 620,
        rating: 5,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
        description: "Sastrería rigurosa con solapas cruzadas y silueta inspirada en la capucha de la cobra real.",
        colors: ["#0B0B0B", "#C0C0C0"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 3,
        name: "Botines Relief Scale",
        category: "calzado",
        price: 390,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
        description: "Botines de cuero ético con grabado láser de textura serpentina y tacón de aguja cromado.",
        colors: ["#0B0B0B"],
        sizes: ["36", "37", "38", "39", "40"]
    },
    {
        id: 4,
        name: "Bolso de Mano Metamorfosis",
        category: "accesorios",
        price: 310,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
        description: "Clutch rígido con broche dorado en forma de víbora y cadena deslizable.",
        colors: ["#D4AF37", "#2F2F2F"],
        sizes: ["Única"]
    },
    {
        id: 5,
        name: "Vestido Negro Venom",
        category: "vestidos",
        price: 530,
        rating: 5,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
        description: "Diseño asimétrico con escote profundo en la espalda y caída fluida de satén negro.",
        colors: ["#0B0B0B"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 6,
        name: "Abrigo Largo Viper Tail",
        category: "chaquetas",
        price: 850,
        rating: 5,
        image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
        description: "Abrigo de lana virgen con forro de seda estampada y cinturón de ajuste con hebilla de serpiente.",
        colors: ["#2F2F2F", "#0B0B0B"],
        sizes: ["M", "L", "XL"]
    },
    {
        id: 7,
        name: "Sandalias Gold Constrictor",
        category: "calzado",
        price: 340,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80",
        description: "Sandalias de tiras finas en tono oro brillante que envuelven el tobillo elegantemente.",
        colors: ["#D4AF37"],
        sizes: ["36", "37", "38", "39"]
    },
    {
        id: 8,
        name: "Gafas de Sol Snake Eye",
        category: "accesorios",
        price: 210,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
        description: "Montura estilo cat-eye exagerada con marcos metálicos plateados y lentes oscuros UV400.",
        colors: ["#C0C0C0", "#0B0B0B"],
        sizes: ["Única"]
    },
    {
        id: 9,
        name: "Top de Cota Serpentina",
        category: "vestidos",
        price: 290,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
        description: "Top elaborado en malla metálica flexible cromada que refleja la luz dramáticamente.",
        colors: ["#C0C0C0"],
        sizes: ["XS", "S", "M"]
    },
    {
        id: 10,
        name: "Pantalón Tailored Escama",
        category: "vestidos",
        price: 380,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=800&q=80",
        description: "Pantalón corte palazzo de tiro alto con jacquard textil de microrrelieve.",
        colors: ["#0B0B0B"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 11,
        name: "Trench Coat Silver Python",
        category: "chaquetas",
        price: 790,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
        description: "Impermeable de lujo con acabado metalizado plateado y solapas amplias.",
        colors: ["#C0C0C0"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 12,
        name: "Mocasines Exotics Royale",
        category: "calzado",
        price: 360,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
        description: "Mocasines unisex de piel texturizada con adorno frontal de serpiente dorada.",
        colors: ["#0B0B0B"],
        sizes: ["38", "39", "40", "41", "42"]
    },
    {
        id: 13,
        name: "Cinturón Bifold Ophidea",
        category: "accesorios",
        price: 180,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
        description: "Cinturón de talle ancho de piel de becerro con hebilla escultórica.",
        colors: ["#0B0B0B", "#D4AF37"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 14,
        name: "Vestido Corto Ecdisis",
        category: "vestidos",
        price: 410,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
        description: "Mini vestido de cóctel con mangas abullonadas y estructura ceñida al cuerpo.",
        colors: ["#2F2F2F"],
        sizes: ["XS", "S", "M"]
    },
    {
        id: 15,
        name: "Chaqueta Biker Scales",
        category: "chaquetas",
        price: 680,
        rating: 5,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        description: "Chaqueta de cuero rockera reinterpretada con acolchado en hombros en forma de escama.",
        colors: ["#0B0B0B"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 16,
        name: "Stilettos Golden Fang",
        category: "calzado",
        price: 420,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=800&q=80",
        description: "Tacones de salón clásicos punta fina con detalle de colmillo metálico en el talón.",
        colors: ["#0B0B0B", "#D4AF37"],
        sizes: ["36", "37", "38", "39"]
    },
    {
        id: 17,
        name: "Anillo Doble Cobra Royale",
        category: "accesorios",
        price: 150,
        rating: 5,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
        description: "Joya articulada en plata de ley 925 con baño de oro de 18K y ojos de esmeralda sintética.",
        colors: ["#D4AF37"],
        sizes: ["6", "7", "8"]
    },
    {
        id: 18,
        name: "Falda Midi Seduction",
        category: "vestidos",
        price: 330,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",
        description: "Falda lápiz de satén con abertura lateral pronunciada y drapeado anatómico.",
        colors: ["#0B0B0B", "#C0C0C0"],
        sizes: ["S", "M", "L"]
    },
    {
        id: 19,
        name: "Chaleco de Estructura Ophidea",
        category: "chaquetas",
        price: 390,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80",
        description: "Chaleco de sastrería sin mangas con hombreras marcadas y ajuste de corchetes.",
        colors: ["#2F2F2F"],
        sizes: ["S", "M"]
    },
    {
        id: 20,
        name: "Brazalete Serpentino Cromo",
        category: "accesorios",
        price: 195,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
        description: "Brazalete rígido de espiral que envuelve el antebrazo con acabado espejo.",
        colors: ["#C0C0C0"],
        sizes: ["Ajustable"]
    }
];

// Estado Global de la Aplicación
let cart = JSON.parse(localStorage.getItem('modaclick_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('modaclick_favs')) || [];

// Elementos del DOM
const productsContainer = document.getElementById('productsContainer');
const featuredContainer = document.getElementById('featuredContainer');
const cartSidebar = document.getElementById('cartSidebar');
const overlayBackdrop = document.getElementById('overlayBackdrop');
const cartTrigger = document.getElementById('cartTrigger');
const closeCart = document.getElementById('closeCart');
const cartBody = document.getElementById('cartBody');
const cartBadge = document.getElementById('cartBadge');
const cartItemCount = document.getElementById('cartItemCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTotal = document.getElementById('cartTotal');
const favBadge = document.getElementById('favBadge');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const searchTrigger = document.getElementById('searchTrigger');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

// Elementos Checkout & Post-Compra
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckoutModal = document.getElementById('closeCheckoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutTotalAmount = document.getElementById('checkoutTotalAmount');
const cardFields = document.getElementById('cardFields');
const codFields = document.getElementById('codFields');
const orderSuccessModal = document.getElementById('orderSuccessModal');
const closeSuccessBtn = document.getElementById('closeSuccessBtn');
const orderNumberEl = document.getElementById('orderNumber');

// Elementos Chatbot Flotante
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');
const chatbotForm = document.getElementById('chatbotForm');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

// Inicialización del Proyecto
document.addEventListener('DOMContentLoaded', () => {
    // Ocultar Loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 1000);

    renderProducts(ophideaProducts, productsContainer);
    renderFeaturedProducts();
    updateCartUI();
    updateFavUI();
    initHeroSlider();
    initCountdown();
    setupEventListeners();
    setupCheckoutLogic();
    setupChatbotLogic();
});

// Renderizar Cuadrícula de Productos
function renderProducts(items, container) {
    if (!container) return;
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-silver);">No se encontraron piezas que coincidan con tu búsqueda.</div>`;
        return;
    }

    items.forEach(product => {
        const isFav = favorites.includes(product.id);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-thumb">
                <img src="${product.image}" alt="${product.name}" class="lazy" loading="lazy">
                <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                    <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price} USD</div>
                <div class="product-actions">
                    <button class="btn btn-gold btn-block" onclick="addToCart(${product.id})">Añadir a la Bolsa</button>
                    <button class="btn btn-outline" onclick="openProductModal(${product.id})" title="Ver Detalles"><i class="fas fa-eye"></i></button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Renderizar Productos Destacados
function renderFeaturedProducts() {
    const featured = ophideaProducts.filter(p => p.rating >= 4.9).slice(0, 4);
    renderProducts(featured, featuredContainer);
}

// Lógica de Carrito de Compras
function addToCart(productId) {
    const product = ophideaProducts.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    openCartSidebar();
    showToast(`"${product.name}" añadido a la bolsa.`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('modaclick_cart', JSON.stringify(cart));
}

function calculateCartSubtotal() {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

function updateCartUI() {
    if (!cartBody) return;
    cartBody.innerHTML = '';
    let total = calculateCartSubtotal();
    let count = cart.reduce((acc, item) => acc + item.quantity, 0);

    if (cart.length === 0) {
        cartBody.innerHTML = `<p style="text-align: center; color: var(--color-silver); margin-top: 40px;">Tu bolsa de compras está vacía.</p>`;
    } else {
        cart.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div style="flex-grow: 1;">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price} USD</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button style="background:none; border:none; color:#ff4d4d; cursor:pointer;" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            `;
            cartBody.appendChild(itemEl);
        });
    }

    if (cartBadge) cartBadge.textContent = count;
    if (cartItemCount) cartItemCount.textContent = count;
    if (cartSubtotal) cartSubtotal.textContent = `$${total} USD`;
    if (cartTotal) cartTotal.textContent = `$${total} USD`;
}

// Lógica de Favoritos
function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
        showToast("Pieza removida de tus favoritos.");
    } else {
        favorites.push(productId);
        showToast("Pieza guardada en tus favoritos.");
    }
    localStorage.setItem('modaclick_favs', JSON.stringify(favorites));
    updateFavUI();
    renderProducts(ophideaProducts, productsContainer);
}

function updateFavUI() {
    if (favBadge) favBadge.textContent = favorites.length;
}

// Modal Lightbox de Producto
function openProductModal(productId) {
    const product = ophideaProducts.find(p => p.id === productId);
    if (!product || !modalBody) return;

    modalBody.innerHTML = `
        <div>
            <img src="${product.image}" alt="${product.name}" style="border-radius: 8px; width: 100%;">
        </div>
        <div>
            <span class="gold-subtitle">${product.category}</span>
            <h2 style="font-size: 2rem; margin-bottom: 10px;">${product.name}</h2>
            <div style="color: var(--color-gold); margin-bottom: 15px;"><i class="fas fa-star"></i> ${product.rating} / 5.0</div>
            <p class="paragraph">${product.description}</p>
            <div style="font-size: 1.8rem; font-weight: 700; margin-bottom: 20px;">$${product.price} USD</div>
            <div style="margin-bottom: 20px;">
                <small style="display:block; margin-bottom:5px; color:var(--color-silver);">Tallas Disponibles:</small>
                ${product.sizes.map(s => `<span style="display:inline-block; border:1px solid var(--color-gray); padding:4px 10px; margin-right:5px; border-radius:4px;">${s}</span>`).join('')}
            </div>
            <button class="btn btn-gold btn-block" onclick="addToCart(${product.id}); closeModalWindow();">Agregar a la Bolsa</button>
        </div>
    `;

    productModal.classList.add('open');
}

function closeModalWindow() {
    if (productModal) productModal.classList.remove('open');
}

// UI Sidebar Toggle
function openCartSidebar() {
    if (cartSidebar) cartSidebar.classList.add('open');
    if (overlayBackdrop) overlayBackdrop.classList.add('open');
}

function closeCartSidebar() {
    if (cartSidebar) cartSidebar.classList.remove('open');
    if (overlayBackdrop) overlayBackdrop.classList.remove('open');
}

// Toast System
function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas fa-check-circle gold-text" style="margin-right: 10px;"></i> ${message}`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Hero Background Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-bg-slider .slide');
    if (slides.length < 2) return;
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

// Countdown Timer Promocional
function initCountdown() {
    let seconds = 3600 * 50;
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minEl = document.getElementById('minutes');
    const secEl = document.getElementById('seconds');

    if (!daysEl) return;

    setInterval(() => {
        if (seconds <= 0) return;
        seconds--;

        const d = Math.floor(seconds / (3600 * 24));
        const h = Math.floor((seconds % (3600 * 24)) / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor(seconds % 60);

        daysEl.textContent = d < 10 ? '0' + d : d;
        hoursEl.textContent = h < 10 ? '0' + h : h;
        minEl.textContent = m < 10 ? '0' + m : m;
        secEl.textContent = s < 10 ? '0' + s : s;
    }, 1000);
}

// Lógica de Checkout y Proceso de Pago
function setupCheckoutLogic() {
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast("Tu bolsa de compras está vacía.");
                return;
            }
            closeCartSidebar();
            if (checkoutTotalAmount) checkoutTotalAmount.textContent = `$${calculateCartSubtotal()} USD`;
            if (checkoutModal) checkoutModal.classList.add('open');
        });
    }

    if (closeCheckoutModal) {
        closeCheckoutModal.addEventListener('click', () => {
            if (checkoutModal) checkoutModal.classList.remove('open');
        });
    }

    // Alternar campos de pago según opción seleccionada
    const paymentOptions = document.querySelectorAll('input[name="paymentMethod"]');
    paymentOptions.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'card') {
                if (cardFields) cardFields.style.display = 'block';
                if (codFields) codFields.style.display = 'none';
            } else {
                if (cardFields) cardFields.style.display = 'none';
                if (codFields) codFields.style.display = 'block';
            }
        });
    });

    // Envío del Formulario de Checkout
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Generar número de orden aleatorio
            const randomOrderNum = '#OPH-' + Math.floor(100000 + Math.random() * 900000);
            if (orderNumberEl) orderNumberEl.textContent = randomOrderNum;

            // Vaciar Carrito
            cart = [];
            saveCart();
            updateCartUI();

            // Cerrar checkout y abrir modal de éxito
            if (checkoutModal) checkoutModal.classList.remove('open');
            if (orderSuccessModal) orderSuccessModal.classList.add('open');
            checkoutForm.reset();
        });
    }

    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', () => {
            if (orderSuccessModal) orderSuccessModal.classList.remove('open');
        });
    }
}

// Lógica del Chatbot de Atención VIP
function setupChatbotLogic() {
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            if (chatbotWindow) chatbotWindow.classList.toggle('open');
        });
    }

    if (closeChatbot) {
        closeChatbot.addEventListener('click', () => {
            if (chatbotWindow) chatbotWindow.classList.remove('open');
        });
    }

    if (chatbotForm && chatbotInput && chatbotMessages) {
        chatbotForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatbotInput.value.trim();
            if (!text) return;

            // Mensaje del Usuario
            appendChatMessage(text, 'user-msg');
            chatbotInput.value = '';

            // Respuesta Automática del Bot
            setTimeout(() => {
                const response = getChatbotResponse(text);
                appendChatMessage(response, 'bot-msg');
            }, 600);
        });
    }
}

function appendChatMessage(text, className) {
    if (!chatbotMessages) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `${className} msg`;
    msgDiv.innerHTML = `<p>${text}</p>`;
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getChatbotResponse(input) {
    const query = input.toLowerCase();

    if (query.includes('envio') || query.includes('envío') || query.includes('entrega')) {
        return "Ofrecemos envíos express internacionales sin costo en compras superiores a $300 USD. Los entregas tardan de 2 a 5 días hábiles.";
    }
    if (query.includes('talla') || query.includes('medida')) {
        return "Nuestras prendas siguen el tallaje europeo estándar. Puedes consultar la guía de tallas en el detalle de cada producto o indicarnos tus medidas para asesorarte.";
    }
    if (query.includes('pago') || query.includes('tarjeta') || query.includes('efectivo')) {
        return "Aceptamos tarjetas de crédito/débito y pago contra entrega al recibir el paquete en tu domicilio.";
    }
    if (query.includes('descuento') || query.includes('promo') || query.includes('oferta')) {
        return "Actualmente disponemos de un 20% de descuento en la línea de calzado y accesorios seleccionados usando la membresía VIP.";
    }
    if (query.includes('hola') || query.includes('buenas')) {
        return "¡Hola! Es un placer atenderte en Moda Click. ¿En qué pieza u oferta de la Colección OPHIDEA estás interesado/a hoy?";
    }

    return "Gracias por contactarnos. Un concierge de nuestro Atelier responderá a tu inquietud a la brevedad. También puedes contactarnos al email concierge@modaclick.com.";
}

// Event Listeners Globales
function setupEventListeners() {
    if (cartTrigger) cartTrigger.addEventListener('click', openCartSidebar);
    if (closeCart) closeCart.addEventListener('click', closeCartSidebar);
    if (overlayBackdrop) overlayBackdrop.addEventListener('click', closeCartSidebar);
    if (closeModal) closeModal.addEventListener('click', closeModalWindow);

    // Menú Responsive Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
    }

    // Scroll Progress & Back to Top
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        const progressBar = document.getElementById('scrollProgress');
        if (progressBar) progressBar.style.width = scrolled + "%";

        if (scrollTopBtn) {
            scrollTopBtn.style.display = winScroll > 500 ? 'block' : 'none';
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // Buscador
    if (searchTrigger) searchTrigger.addEventListener('click', () => searchOverlay.style.display = 'block');
    if (searchClose) searchClose.addEventListener('click', () => searchOverlay.style.display = 'none');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filtered = ophideaProducts.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.category.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );
            renderProducts(filtered, productsContainer);
        });
    }

    // Filtros de Categoría
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.filter;
            if (category === 'all') {
                renderProducts(ophideaProducts, productsContainer);
            } else {
                const filtered = ophideaProducts.filter(p => p.category === category);
                renderProducts(filtered, productsContainer);
            }
        });
    });

    // Ordenamiento
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            let sorted = [...ophideaProducts];

            if (val === 'price-low') sorted.sort((a, b) => a.price - b.price);
            if (val === 'price-high') sorted.sort((a, b) => b.price - a.price);
            if (val === 'rating') sorted.sort((a, b) => b.rating - a.rating);

            renderProducts(sorted, productsContainer);
        });
    }

    // Validación de Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (name.value.trim().length < 2) {
                name.parentElement.classList.add('invalid');
                isValid = false;
            } else {
                name.parentElement.classList.remove('invalid');
            }

            if (!email.value.includes('@') || !email.value.includes('.')) {
                email.parentElement.classList.add('invalid');
                isValid = false;
            } else {
                email.parentElement.classList.remove('invalid');
            }

            if (message.value.trim().length < 10) {
                message.parentElement.classList.add('invalid');
                isValid = false;
            } else {
                message.parentElement.classList.remove('invalid');
            }

            if (isValid) {
                showToast("Mensaje enviado con éxito. Nuestro Atelier te contactará.");
                contactForm.reset();
            }
        });
    }
}
