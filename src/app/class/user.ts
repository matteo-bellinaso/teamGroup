export class User {

    username: string;
    password: string;
    tipo: boolean;

    constructor(username: string, password: string, tipo: boolean = false) {
        this.password = password;
        this.username = username;
        this.tipo = tipo;
    }

    clona() {
        return new User(this.username, this.password);
    }

}