export class Estudiante {
    identificacion: number;
    nombres: string;
    apellidos: string;
    correo: string;
    telefono: string;
    direccion: string;
    semestre: number;
    contrasena: string;
    edad: number;

  
    constructor() {
      this.identificacion = 0;
      this.nombres = '';
      this.apellidos = '';
      this.correo ='';
      this.telefono = '';
      this.direccion = '';
      this.semestre = 0;
      this.contrasena = '';
      this.edad = 0;
    }
  }