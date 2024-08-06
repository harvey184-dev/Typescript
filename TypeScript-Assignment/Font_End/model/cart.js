async function doc(courseApi) {
    try {
        const response = await axios.get(courseApi);
        return response.data;
    }
    catch (error) {
        console.error('GET Error:', error);
        throw error;
    }
}
function getCart() {
    return JSON.parse(localStorage.getItem("gioHang")) || [];
}
function updateCart(cart) {
    localStorage.setItem("gioHang", JSON.stringify(cart));
}
function addToCart(product) {
    const cart = getCart();
    const productIndex = cart.findIndex(item => item.id_product === product.id_product);
    if (productIndex !== -1) {
        cart[productIndex].quantity += product.quantity;
    }
    else {
        cart.push(product);
    }
    console.log("Updated cart:", cart);
    updateCart(cart);
    showCart();
}
async function giohang(id_product) {
    try {
        const product = await doc(`http://localhost:3000/detail_product/${id_product}`);
        const quantity = 1;
        if (product.length > 0) {
            const productToAdd = {
                id_product: product[0].id_product,
                title_product: product[0].title_product,
                image_product: product[0].image_product,
                price_product: product[0].price_product,
                quantity: quantity
            };
            addToCart(productToAdd);
            location.reload();
        }
        else {
            alert("Không tìm thấy thông tin sản phẩm!");
        }
    }
    catch (error) {
        console.error('Error adding to cart:', error);
    }
}
function showCart() {
    const cart = getCart();
    console.log("Current cart:", cart);
    const cartContainer = document.getElementById("cartItems");
    const totalContainer = document.getElementById("cartTotal");
    let cartHTML = '';
    let totalPrice = 0;
    if (!cartContainer || !totalContainer) {
        console.error("Không tìm thấy phần tử giỏ hàng hoặc tổng giá.");
        return;
    }
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            cartHTML += `
            <tr class="tr">
                <td data-th="Hình ảnh">
                    <div class="col_table_image col_table_hidden-xs"><img
                            src="../public/uploads/product/${cart[i].image_product}"
                            alt="${cart[i].title_product}"></div>
                </td>
                <td data-th="Sản phẩm">
                    <div class="col_table_name">
                        <h4 class="nomargin">${cart[i].title_product}</h4>
                    </div>
                </td>
                <td data-th="Giá"><span class="color_red font_money">${cart[i].price_product.toLocaleString('vi')}đ</span>
                </td>
                <td data-th="Số lượng">
                    <div class="clear margintop5">
                        <div class="floatleft ccc">
                            ${cart[i].quantity}
                        </div>
                    </div>
                    <div class="clear"></div>
                </td>
                <td data-th="Thành tiền" class="text_center"><span class="color_red font_money">${(cart[i].price_product * cart[i].quantity).toLocaleString('vi')}đ</span>
                </td>
                <td class="actions aligncenter">
                    <button type="submit" style="box-shadow: none;" value="120" name="delete_cart"
                        class="btn btn-sm btn-warning" onclick="removeFromCart(${i})">Xóa</button>
                </td>
            </tr>
            `;
            totalPrice += cart[i].price_product * cart[i].quantity;
        }
        totalContainer.innerHTML = `Tổng giá: ${totalPrice.toLocaleString('vi')}đ`;
    }
    else {
        cartHTML = `
            <tr>
                <td colspan="6">
                    <div class="sum_price_all">
                        <span class="text_price">Giỏ hàng trống</span>
                    </div>
                </td>
            </tr>
        `;
        totalContainer.innerHTML = "Tổng giá: 0đ";
    }
    cartContainer.innerHTML = cartHTML;
}
function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    updateCart(cart);
    showCart();
}
document.addEventListener("DOMContentLoaded", function () {
    showCart();
});
function clearCart() {
    localStorage.removeItem("gioHang");
}
function addadd() {
    const cart = getCart();
    const customer = JSON.parse(localStorage.getItem("customer") || '[]');
    const order_code = Math.floor(Math.random() * 10000).toString();
    const order_date = new Date().toLocaleString();
    const order_status = 0;
    const name = document.getElementById('name').value || customer.customer_name;
    const sodienthoai = document.getElementById('sodienthoai').value || customer.customer_phone;
    const diachi = document.getElementById('diachi').value || customer.customer_address;
    const email = document.getElementById('email').value || customer.customer_email;
    const noidung = document.getElementById('noidung').value;
    const idProducts = cart.map(item => item.id_product);
    console.log(idProducts);
    const order = {
        order_code: order_code,
        order_status: order_status,
        order_date: order_date
    };
    fetch('http://localhost:3000/admin/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (cart) {
        for (const key in cart) {
            if (cart.hasOwnProperty(key)) {
                const value = cart[key];
                const order_details = {
                    'order_code': order_code,
                    'product_id': value['id_product'],
                    'product_quantity': value['quantity'],
                    'name': name,
                    'sodienthoai': sodienthoai,
                    'email': email,
                    'noidung': noidung,
                    'diachi': diachi
                };
                fetch('http://localhost:3000/admin/order_details', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(order_details)
                })
                    .then(data => {
                    console.log(data.message);
                    window.location.href = 'index.html';
                });
            }
        }
        clearCart();
    }
}
