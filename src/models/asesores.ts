export class asesores {
    Name_Complet: string;
    Email: string;
    Identification: string;
    Phone: string;
    Type_Asser: string;
    Password: string;
    Direction: string;


    constructor() {
        this.Name_Complet = '';
        this.Password = '';
        this.Email = '';
        this.Identification = '';
        this.Type_Asser = '';
        this.Phone = '';
        this.Direction = '';
    }

    getPassword() {
        let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
        let contraseña = "";
        for (let i = 0; i < 15; i++) {
            contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return contraseña;
    }
}