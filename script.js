/* ==========================================================================
   MODA CLICK - COLECCIÓN OPHIDEA (2026)
   Lógica JavaScript Principal & Contestador Automático (Chatbot VIP)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. CONFIGURACIÓN Y BASE DE DATOS
// --------------------------------------------------------------------------
const CONFIG = {
    whatsappNumber: "573243520036",
    email: "modaclick307@gmail.com"
};

const productsData = [
    {
        id: 1,
        name: "Vestido Ophidea Gold",
        category: "vestidos",
        price: 280000,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800",
        description: "Seda importada con detalles dorados y corte entallado de autor."
    },
    {
        id: 2,
        name: "Chaqueta Blazer Velvet",
        category: "chaquetas",
        price: 340000,
        image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800",
        description: "Terciopelo italiano de alta densidad con botones personalizados."
    },
    {
        id: 3,
        name: "Vestido de Gala Noir",
        category: "vestidos",
        price: 390000,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800",
        description: "Escote fluido con caída libre en satén de seda negra."
    },
    {
        id: 4,
        name: "Bolso de Mano Serpentine",
        category: "accesorios",
        price: 180000,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800",
        description: "Herrajes dorados con textura efecto serpiente Ophidea."
    },
    {
        id: 5,
        name: "Chaqueta Sastre Imperial",
        category: "chaquetas",
        price: 310000,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800",
        description: "Lana fina liviana con forro interno en seda estampada."
    },
    {
        id: 6,
        name: "Cinturón Ophidea Monogram",
        category: "accesorios",
        price: 95000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800",
        description: "Cuero genuino con hebilla maciza bañada en tono oro."
    }
];

// Estado global del carrito (persistido en localStorage)
let cart = JSON.parse(localStorage.getItem("modaclick_cart")) || [];

// --------------------------------------------------------------------------
// 2. INICIALIZACIÓN DEL DOM
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    initScrollProgress();
    renderProducts(productsData);
    initFilterSystem();
    initSearchSystem();
    initCartSystem();
    initContactForm();
    initChatbot();
    updateCartUI(); // Carga elementos guardados previamente
});

/* ==========================================================================
   3. BARRAS DE NAVEGACIÓN Y SCROLL PROGRESS
   ========================================================================== */
function initScrollProgress() {
    const progressBar = document.getElementById("progressBar");
    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (progressBar) progressBar.style.width = `${scrolled}%`;
    });

    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
}

/* ==========================================================================
   4. CATÁLOGO Y FILTROS
   ========================================================================== */
function renderProducts(products) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.innerHTML = "";

    if (products.length === 0) {
        grid.innerHTML = `<p class="paragraph text-center" style="grid-column: 1/-1; color: var(--color-text-muted);">No se encontraron productos en esta categoría.</p>`;
        return;
    }

    const fragment = document.createDocumentFragment();

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card glassmorphism";
        card.innerHTML = `
            <div class="product-img-box">
                <img src="${p.image}" alt="${p.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-cat">${p.category.toUpperCase()}</span>
                <h3 class="product-title">${p.name}</h3>
                <p class="product-desc">${p.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${p.price.toLocaleString("es-CO")} COP</span>
                    <button class="btn-add-cart" onclick="addToCart(${p.id})">
                        <i class="fas fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>
        `;
        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

function initFilterSystem() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.dataset.filter;
            if (filter === "all") {
                renderProducts(productsData);
            } else {
                const filtered = productsData.filter(p => p.category === filter);
                renderProducts(filtered);
            }
        });
    });
}

/* ==========================================================================
   5. BUSCADOR DESPLEGABLE
   ========================================================================== */
function initSearchSystem() {
    const searchBtn = document.getElementById("searchBtn");
    const closeSearch = document.getElementById("closeSearch");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchInput = document.getElementById("searchInput");

    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener("click", () => {
            searchOverlay.classList.add("active");
            if (searchInput) searchInput.focus();
        });
    }

    if (closeSearch && searchOverlay) {
        closeSearch.addEventListener("click", () => {
            searchOverlay.classList.remove("active");
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            const filtered = productsData.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.description.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query)
            );
            renderProducts(filtered);
        });
    }
}

/* ==========================================================================
   6. SISTEMA DE CARRITO DE COMPRAS CON PERSISTENCIA
   ========================================================================== */
function initCartSystem() {
    const cartBtn = document.getElementById("cartBtn");
    const closeCart = document.getElementById("closeCart");
    const cartSidebar = document.getElementById("cartSidebar");
    const overlayBackdrop = document.getElementById("overlayBackdrop");
    const checkoutBtn = document.getElementById("checkoutBtn");

    const toggleCart = (show) => {
        if (show) {
            cartSidebar?.classList.add("active");
            overlayBackdrop?.classList.add("active");
        } else {
            cartSidebar?.classList.remove("active");
            overlayBackdrop?.classList.remove("active");
        }
    };

    if (cartBtn) cartBtn.addEventListener("click", () => toggleCart(true));
    if (closeCart) closeCart.addEventListener("click", () => toggleCart(false));
    if (overlayBackdrop) overlayBackdrop.addEventListener("click", () => toggleCart(false));

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", sendCartToWhatsApp);
    }
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveAndRefreshCart();
    document.getElementById("cartSidebar")?.classList.add("active");
    document.getElementById("overlayBackdrop")?.classList.add("active");
}

function updateCartQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    saveAndRefreshCart();
}

function saveAndRefreshCart() {
    localStorage.setItem("modaclick_cart", JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartBody = document.getElementById("cartBody");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartBody) return;

    cartBody.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = `<p class="text-center paragraph mt-4" style="color: var(--color-text-muted);">Tu carrito está vacío.</p>`;
    } else {
        const fragment = document.createDocumentFragment();
        cart.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            total += itemSubtotal;
            totalItems += item.quantity;

            const cartItemHTML = document.createElement("div");
            cartItemHTML.className = "cart-item";
            cartItemHTML.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h5 class="cart-item-title">${item.name}</h5>
                    <span class="cart-item-price">$${item.price.toLocaleString("es-CO")}</span>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <button class="btn-add-cart" style="padding: 2px 8px;" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span style="font-weight: bold; font-size: 0.9rem;">${item.quantity}</span>
                    <button class="btn-add-cart" style="padding: 2px 8px;" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                </div>
            `;
            fragment.appendChild(cartItemHTML);
        });
        cartBody.appendChild(fragment);
    }

    if (cartCount) cartCount.textContent = totalItems;
    if (cartTotal) cartTotal.textContent = `$${total.toLocaleString("es-CO")} COP`;
}

function sendCartToWhatsApp() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos para realizar un pedido.");
        return;
    }

    let message = "¡Hola Moda Click! Deseo realizar el siguiente pedido de la Colección Ophidea:\n\n";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `• ${item.name} (x${item.quantity}) - $${subtotal.toLocaleString("es-CO")} COP\n`;
    });

    message += `\n*Total a Pagar:* $${total.toLocaleString("es-CO")} COP\n`;
    message += "Quedo a la espera para confirmar el pago y los datos de envío.";

    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

/* ==========================================================================
   7. FORMULARIO DE CONTACTO DIRECTO A WHATSAPP
   ========================================================================== */
function initContactForm() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("contactName")?.value || "";
        const email = document.getElementById("contactEmail")?.value || "";
        const userMsg = document.getElementById("contactMessage")?.value || "";

        const formattedMsg = `*NUEVA SOLICITUD DE CLIENTE - MODA CLICK*\n\n` +
            `*Nombre:* ${name}\n` +
            `*Correo:* ${email}\n` +
            `*Mensaje:* ${userMsg}\n\n` +
            `Solicitud enviada desde la web de Colección Ophidea.`;

        const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
        window.open(url, "_blank");
        contactForm.reset();
    });
}

/* ==========================================================================
   8. CONTESTADOR AUTOMÁTICO (CHATBOT VIP)
   ========================================================================== */
function initChatbot() {
    const chatbotToggle = document.getElementById("chatbotToggle");
    const chatbotWindow = document.getElementById("chatbotWindow");
    const closeChatbot = document.getElementById("closeChatbot");
    const sendChatMsg = document.getElementById("sendChatMsg");
    const chatInput = document.getElementById("chatInput");

    if (!chatbotToggle || !chatbotWindow) return;

    chatbotToggle.addEventListener("click", () => {
        chatbotWindow.classList.toggle("active");
    });

    if (closeChatbot) {
        closeChatbot.addEventListener("click", () => {
            chatbotWindow.classList.remove("active");
        });
    }

    if (sendChatMsg && chatInput) {
        sendChatMsg.addEventListener("click", () => handleUserChatMessage());
        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") handleUserChatMessage();
        });
    }
}

function handleUserChatMessage() {
    const chatInput = document.getElementById("chatInput");
    const text = chatInput.value.trim();
    if (!text) return;

    appendChatMessage(text, "user");
    chatInput.value = "";

    setTimeout(() => {
        const botReply = generateBotResponse(text);
        appendChatMessage(botReply, "bot");
    }, 500);
}

function sendQuickReply(optionText) {
    appendChatMessage(optionText, "user");
    setTimeout(() => {
        const botReply = generateBotResponse(optionText);
        appendChatMessage(botReply, "bot");
    }, 500);
}

function appendChatMessage(message, sender) {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;

    const msgDiv = document.createElement("div");
    msgDiv.className = `msg ${sender}-msg`;
    msgDiv.innerHTML = message;

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateBotResponse(input) {
    const cleanInput = input.toLowerCase();

    if (cleanInput.includes("precio") || cleanInput.includes("catálogo") || cleanInput.includes("catalogo") || cleanInput.includes("costo")) {
        return `Nuestros vestidos y prendas de la Colección Ophidea oscilan entre los $95.000 y $390.000 COP. Puedes explorar el catálogo completo arriba o hacer tu pedido personalizado por <a href="https://wa.me/${CONFIG.whatsappNumber}" target="_blank" style="color:var(--color-gold); font-weight:bold;">WhatsApp aquí</a>.`;
    }

    if (cleanInput.includes("talla") || cleanInput.includes("medida") || cleanInput.includes("guía") || cleanInput.includes("guia")) {
        return `Manejamos tallas estándar XS, S, M y L. Además, ofrecemos el servicio de **entalle personalizado** para prendas de la Colección Ophidea. ¿Te gustaría recibir asesoría personalizada?`;
    }

    if (cleanInput.includes("envío") || cleanInput.includes("envio") || cleanInput.includes("domicilio") || cleanInput.includes("tiempo")) {
        return `Realizamos envíos asegurados a toda Colombia. Los tiempos de entrega toman entre **2 a 4 días hábiles** según la ciudad.`;
    }

    if (cleanInput.includes("asesor") || cleanInput.includes("humano") || cleanInput.includes("persona") || cleanInput.includes("hablar")) {
        return `¡Por supuesto! Un asesor VIP de Moda Click te atenderá directamente. Haz clic aquí para chatear: <br><br><a href="https://wa.me/${CONFIG.whatsappNumber}?text=Hola,%20deseo%20hablar%20con%20un%20asesor%20humano" target="_blank" class="btn btn-gold" style="display:inline-block; padding:5px 10px; font-size:0.8rem; text-decoration:none;">Contactar en WhatsApp</a>`;
    }

    return `Gracias por contactar a Moda Click. Para una atención inmediata o personalizar tu compra, escríbenos a nuestro correo **${CONFIG.email}** o directamente a nuestro <a href="https://wa.me/${CONFIG.whatsappNumber}" target="_blank" style="color:var(--color-gold);">WhatsApp (+57 324 352 0036)</a>.`;
}
