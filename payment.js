// payment.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const productPrice = urlParams.get('price');

    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-price').textContent = productPrice;

    document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        window.location.href = 'thank-you.html'; // Redirect to thank-you page
    });
});
