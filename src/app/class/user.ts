export class User {

    username: string;
    password: string;
    email: string;
    name: string;
    lastName: string;
    birthDate: Date;
    birthCity: string;
    newsletterSub: boolean;
    tipo: boolean;

    constructor(username: string = "", password: string = "", tipo: boolean = false, email: string = "", name: string = "", lastName: string = "", birthDate: Date = null, birthCity: string = "", newsletterSub: boolean = false) {
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

    changeValues(user: User) {
        this.username = user.username;
        this.email = user.email;
        this.name = user.name;
        this.lastName = user.lastName;
        this.birthDate = user.birthDate;
        this.birthCity = user.birthCity;
        this.newsletterSub = user.newsletterSub;   
    }

    clona() {
        return new User(this.username, this.password, this.tipo, this.email, this.name, this.lastName, this.birthDate, this.birthCity, this.newsletterSub);
    } 
        formatDate(date: Date) {
        
        let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate();
            let year = date.getFullYear();
        
        if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
        
        return [year, month, day].join('-');
        }

}