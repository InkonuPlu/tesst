// script.js
document.addEventListener('DOMContentLoaded', function() {
    const shopNowButton = document.getElementById('scroly');
    const categoriesSection = document.getElementById('categories');

    if (shopNowButton && categoriesSection) {
        shopNowButton.addEventListener('click', function() {
            categoriesSection.scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        console.error('Shop Now button or Categories section not found');
    }
});
