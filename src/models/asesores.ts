export class asesores {
    nombreCompleto: string;
    correo: string;
    identificacion: number;
    telefono: number;
    tipoAsesor: string;
    contrasena: string;
    direccion: string;


    constructor() {
        this.nombreCompleto = '';
        this.contrasena = '';
        this.correo = '';
        this.identificacion = 0;
        this.tipoAsesor = '';
        this.telefono = 0;
        this.direccion = '';
    }

    getPassword() {
        let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
        let contraseña = "";
        for (let i = 0; i <= 15; i++) {
            contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return contraseña;
    }
}   