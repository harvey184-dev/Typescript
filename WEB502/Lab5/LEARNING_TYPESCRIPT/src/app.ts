import { registeredValidators } from './validators';
import { LoginModel } from './models/login.model';

const login = new LoginModel('', '');

console.log(registeredValidators);


function handleLogin() {
    const usernameInput = document.getElementById('usernameInput') as HTMLInputElement;
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;

    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log('Login started with username:', username, 'and password:', password);
}
