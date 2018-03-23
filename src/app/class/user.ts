export class User {

    username: string;
    password: string;
    email : string;
    name: string;
    lastName: string;
    birthDate: Date;
    birthCity: string;
    newsletterSub: boolean;
    tipo: boolean;

    constructor(username: string, password: string, tipo: boolean, email: string, name: string, lastName: string, birthDate : Date, birthCity: string, newsletterSub: boolean) {
        this.password = password;
        this.username = username;
        this.email = email;
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.birthCity = birthCity;
        this.newsletterSub = newsletterSub;
        this.tipo = tipo;
    }

    

    clona() {
        return new User(this.username, this.password, this.tipo , this.email, this.name, this.lastName, this.birthDate, this.birthCity, this.newsletterSub );
    }

}