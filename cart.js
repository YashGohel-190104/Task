document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cartItems');
    const clearCartButton = document.getElementById('clearCart');
    // @ts-ignore
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        // @ts-ignore
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('card', 'mb-3');
            div.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${item.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${item.price}</h5>
                            <p class="card-text">${item.description}</p>
                        </div>
                    </div>
                </div>
            `;
            // @ts-ignore
            cartItems.appendChild(div);
        });
    }

    // @ts-ignore
    clearCartButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        window.location.reload();
    });
        });


