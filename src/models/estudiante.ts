export class Estudiante {
  Cedula: string;
  NombreCompleto: string;
  Correo: string;
  Celular: string;
  Semestre: number;
  Password: string;
  Edad: string;

    constructor() {
      this.NombreCompleto = '';
      this.Cedula = '';
      this.Correo = '';
      this.Password = '';
      this.Celular = '';
      this.Edad = '';
      this.Semestre = 0;
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