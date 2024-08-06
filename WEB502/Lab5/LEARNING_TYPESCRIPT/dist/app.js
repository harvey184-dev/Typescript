"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
var login_model_1 = require("./models/login.model");
var login = new login_model_1.LoginModel('', ''); // Example instantiation, you can replace the arguments with actual username and password
// Example usage of registered validators
console.log(registeredValidators);
// You can continue adding more validators as needed
function handleLogin() {
    var usernameInput = document.getElementById('usernameInput');
    var passwordInput = document.getElementById('passwordInput');
    var username = usernameInput.value;
    var password = passwordInput.value;
    // Thực hiện xử lý đăng nhập với username và password đã nhập
    console.log('Login started with username:', username, 'and password:', password);
    // Ví dụ: Gửi yêu cầu đăng nhập đến server và xử lý kết quả
}
