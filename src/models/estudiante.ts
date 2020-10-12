export class Estudiante {
  identificacion: number;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  semestre: number;
  contrasena: string;
  edad: number;


  constructor() {
    this.nombreCompleto = '';
    this.identificacion = 0;
    this.correo = '';
    this.contrasena = '';
    this.telefono = '';
    this.edad = 0;
    this.semestre = 0;
  }
}