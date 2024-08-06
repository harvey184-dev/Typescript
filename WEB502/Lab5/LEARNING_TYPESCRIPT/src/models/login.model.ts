import { registerRequired } from '../validators';

export class LoginModel {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        registerRequired(this, 'username');
        registerRequired(this, 'password');
    }
}
