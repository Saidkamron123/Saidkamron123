// Массив товаров
let products = [];
let productId = 1;

// DOM элементы
const productsGrid = document.getElementById('productsGrid');
const addProductBtn = document.getElementById('addProductBtn');
const addProductModal = document.getElementById('addProductModal');
const closeModal = document.getElementById('closeModal');
const productForm = document.getElementById('productForm');
const notification = document.getElementById('notification');

// Загрузка товаров из localStorage при запуске
function loadProducts() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
        productId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        renderProducts();
    }
}

// Сохранение товаров в localStorage
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Отображение товаров
function renderProducts() {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">Нет товаров. Добавьте первый товар!</div>';
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <button class="delete-product" onclick="deleteProduct(${product.id})">×</button>
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}">` : '📦'}
            </div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description || 'Нет описания'}</p>
            <div class="product-price">${product.price.toLocaleString()} ₽</div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Добавление товара
function addProduct(name, description, price, image) {
    const product = {
        id: productId++,
        name: name,
        description: description,
        price: parseFloat(price),
        image: image || ''
    };
    
    products.push(product);
    saveProducts();
    renderProducts();
    showNotification('Товар добавлен!');
}

// Удаление товара
function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    saveProducts();
    renderProducts();
    showNotification('Товар удален!');
}

// Показ уведомления
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Обработчики событий
addProductBtn.addEventListener('click', () => {
    addProductModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    addProductModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === addProductModal) {
        addProductModal.style.display = 'none';
    }
});

productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    const image = document.getElementById('productImage').value;
    
    if (name && price) {
        addProduct(name, description, price, image);
        productForm.reset();
        addProductModal.style.display = 'none';
    }
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});
