function addToCart(productId, productName, productPrice) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
          const product = {
             name: productName,
             price: productPrice,
             quantity: 1 
};

const existingProductIndex = cart.findIndex(item => item.name === productName);
 if (existingProductIndex > -1) {
     cart[existingProductIndex].quantity += 1;
} else {
    cart.push(product);
}

sessionStorage.setItem("cart", JSON.stringify(cart));
alert(`${productName} has been added to your cart.`);
}
const carSpecsData = {
"Chevrolet Cruze 2024": "Year: 2024, Seats: 5, Engine: 1.6L Turbo, Transmission: 6-speed automatic, Horsepower: 153 HP, Fuel Efficiency: 14.8 km/l, Max Speed: 200 km/h, Fuel Tank Capacity: 50 liters.",
"Maybach-gls-480-range-rover-2024": "Year: 2024, Seats: 7, Engine: 4.0L V8, Transmission: 9-speed automatic, Horsepower: 489 HP, Fuel Efficiency: 9.1 km/l, Max Speed: 250 km/h, Fuel Tank Capacity: 90 liters.",
"ford-ranger-xlt-2024": "Year: 2024, Seats: 5, Engine: 2.0L Bi-Turbo Diesel, Transmission: 10-speed automatic, Horsepower: 210 HP, Fuel Efficiency: 12.5 km/l, Max Speed: 180 km/h, Fuel Tank Capacity: 80 liters.",
"Mercedes-Benz Maybach S-Class": "Year: 2023, Seats: 4, Engine: 3.0L V6, Transmission: 9-speed automatic, Horsepower: 362 HP, Fuel Efficiency: 10.2 km/l, Max Speed: 250 km/h, Fuel Tank Capacity: 70 liters.",
"mercedes-c300": "Year: 2024, Seats: 5, Engine: 2.0L Turbo, Transmission: 9-speed automatic, Horsepower: 255 HP, Fuel Efficiency: 12.1 km/l, Max Speed: 240 km/h, Fuel Tank Capacity: 66 liters.",
"Mercedes-Maybach GLS 600 4Matic 2022": "Year: 2022, Seats: 7, Engine: 4.0L V8, Transmission: 9-speed automatic, Horsepower: 550 HP, Fuel Efficiency: 8.8 km/l, Max Speed: 250 km/h, Fuel Tank Capacity: 90 liters.",
"Mercedes-Maybach S450 4MATIC": "Year: 2023, Seats: 4, Engine: 3.0L V6, Transmission: 9-speed automatic, Horsepower: 367 HP, Fuel Efficiency: 10.3 km/l, Max Speed: 250 km/h, Fuel Tank Capacity: 70 liters.",
"Toyota Vios": "Year: 2024, Seats: 5, Engine: 1.5L, Transmission: CVT, Horsepower: 107 HP, Fuel Efficiency: 18.1 km/l, Max Speed: 180 km/h, Fuel Tank Capacity: 42 liters.",
"Toyota-raize": "Year: 2024, Seats: 5, Engine: 1.0L Turbo, Transmission: CVT, Horsepower: 98 HP, Fuel Efficiency: 20.5 km/l, Max Speed: 175 km/h, Fuel Tank Capacity: 36 liters.",
"Vinfast Lux A2.0": "Year: 2023, Seats: 5, Engine: 2.0L Turbo, Transmission: 8-speed automatic, Horsepower: 228 HP, Fuel Efficiency: 11.1 km/l, Max Speed: 220 km/h, Fuel Tank Capacity: 70 liters.",
"Vinfast Lux SA2.0": "Year: 2023, Seats: 7, Engine: 2.0L Turbo, Transmission: 8-speed automatic, Horsepower: 228 HP, Fuel Efficiency: 10.1 km/l, Max Speed: 200 km/h, Fuel Tank Capacity: 85 liters.",
"Vinfast VF8 Lux": "Year: 2023, Seats: 5, Engine: Electric Motor, Battery: 82 kWh, Range: 400 km, Horsepower: 402 HP, Max Speed: 200 km/h, Charging Time: 7-8 hours (AC charger)."
    
};
function openModal(carName) {
    console.log("Opening modal for:", carName);

    const modal = document.getElementById("carModal");
    const carNameElement = document.getElementById("carName");
    const carSpecsElement = document.getElementById("carSpecs");

    carNameElement.innerText = carName;
    carSpecsElement.innerText = carSpecsData[carName] || "Thông số không có sẵn.";
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("carModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("carModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
function checkLogin() {
    const user = sessionStorage.getItem("loggedInUser");  // Giả sử bạn lưu thông tin đăng nhập trong sessionStorage
    if (!user) {
        alert("You need to log in to add items to the cart!");
        window.location.href = "login.html";  // Chuyển hướng đến trang đăng nhập
        return false;  // Không thực hiện hành động tiếp theo
    }
    return true;  // Nếu đã đăng nhập, cho phép thêm vào giỏ
}
function addToCart(productId, productName, productPrice) {
    if (!checkLogin()) {
        return;  // Nếu chưa đăng nhập, không cho phép thêm vào giỏ
    }
    
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }

    // Lưu giỏ hàng vào sessionStorage
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} has been added to your cart.`);
}