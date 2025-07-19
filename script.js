// Popup Management
let popup = document.getElementById('searchPopup');
function openSearchPopup() {
    popup.style.display = 'block';
    document.getElementById('searchInput').focus();
    animatePopup();
}

function closeSearchPopup() {
    popup.style.display = 'none';
}

function animatePopup() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.style.animation = 'scaleIn 0.5s ease-out';
    setTimeout(() => {
        popupContent.style.animation = '';
    }, 500);
}

// Search Functionality
const products = [
    'Tennis Racket', 'Sports Apparel', 'Tennis Balls', 'Tennis Shoes', 'Racket Strings'
];

function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('searchResults');
    results.innerHTML = '';

    const filteredProducts = products.filter(product => product.toLowerCase().includes(input));
    if (filteredProducts.length === 0 && input) {
        results.innerHTML = '<li>No results found</li>';
    } else {
        filteredProducts.forEach(product => {
            const li = document.createElement('li');
            li.textContent = product;
            li.addEventListener('click', () => {
                alert(`Selected: ${product}`);
                closeSearchPopup();
            });
            results.appendChild(li);
        });
    }
}

// Animation on Load
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    const shopNow = document.querySelector('.shop-now');
    const getNow = document.querySelector('.get-now');

    // Continuous Animations
    setInterval(() => {
        heroText.style.animation = 'bounceIn 1s ease-out';
        setTimeout(() => heroText.style.animation = '', 1000);
    }, 5000);

    setInterval(() => {
        document.querySelector('.hero').style.backgroundColor = `hsl(${Math.random() * 360}, 50%, 20%)`;
    }, 5000);

    // Button Interactions
    shopNow.addEventListener('click', () => {
        shopNow.style.transform = 'scale(1.1)';
        setTimeout(() => {
            shopNow.style.transform = 'scale(1)';
            alert('Redirecting to shop page!');
        }, 200);
    });

    getNow.addEventListener('click', () => {
        getNow.style.transform = 'scale(1.15)';
        setTimeout(() => {
            getNow.style.transform = 'scale(1)';
            alert('Check out new arrivals!');
        }, 200);
    });

    // Featured Items Hover
    document.querySelectorAll('.featured-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.background = '#ffcc00';
            item.style.color = '#1a2a2a';
        });
        item.addEventListener('mouseout', () => {
            item.style.background = '#2e4a4a';
            item.style.color = '#fff';
        });
    });
});