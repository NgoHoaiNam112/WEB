document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const cartItemsDiv = document.getElementById("cart-items");
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        // Loop through cart and display items
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <h4>${item.name}</h4>
                <p>Price: ${item.price.toLocaleString()} VND</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toLocaleString()} VND</p>
            `;
            cartItemsDiv.appendChild(itemDiv);
            totalPrice += item.price * item.quantity;
        });
        // Show total price
        document.getElementById("total-price").textContent = totalPrice.toLocaleString();
    }
});

// Function to handle checkout
function checkout() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to the cart before proceeding.");
        return;
    }

    // Clear the cart and show a thank you message
    sessionStorage.removeItem("cart");
    alert("Thank you for your purchase!");
    window.location.href = "index.html"; // Redirect to the home page
}

// Function to process payment
function processPayment() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to the cart before proceeding.");
        return;
    }

    // Simulate a payment process (e.g., connecting to payment gateway)
    alert("Redirecting to payment gateway...");
    // After payment is successful
    sessionStorage.removeItem("cart");
    alert("Payment successful! Thank you for your purchase.");
    window.location.href = "index.html"; // Redirect to the home page
}
// Hiển thị modal thanh toán
// Hiển thị modal thanh toán
function processPayment() {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to the cart before proceeding.");
        return;
    }

    document.getElementById("payment-modal").style.display = "flex";
}

// Đóng modal
function closeModal() {
    document.getElementById("payment-modal").style.display = "none";
}

// Xử lý form thanh toán
document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Lấy dữ liệu từ form
    const cardNumber = document.getElementById("card-number").value;
    const cardHolder = document.getElementById("card-holder").value;
    const paymentDate = document.getElementById("payment-date").value;
    const cvv = document.getElementById("cvv").value;

    // Kiểm tra các trường nhập liệu
    if (!cardNumber || !cardHolder || !paymentDate || !cvv) {
        alert("Please fill in all payment details.");
        return;
    }

    // Kiểm tra định dạng thẻ (16 chữ số)
    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Card number must be exactly 16 digits.");
        return;
    }

    // Kiểm tra định dạng CVV (3 chữ số)
    if (!/^\d{3}$/.test(cvv)) {
        alert("CVV must be exactly 3 digits.");
        return;
    }

    // Kiểm tra ngày thanh toán không phải trong quá khứ
    const selectedDate = new Date(paymentDate);
    const today = new Date();
    if (selectedDate < today) {
        alert("Payment date cannot be in the past.");
        return;
    }

    // Mô phỏng gửi dữ liệu thanh toán đến server
    setTimeout(() => {
        alert("Payment successful! Thank you for your purchase.");
        sessionStorage.removeItem("cart"); // Xóa giỏ hàng sau khi thanh toán
        window.location.href = "index.html"; // Chuyển hướng về trang chủ
    }, 2000);
});


