export class Estudiante {
  identificacion: number;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  semestre: number;
  contrasena: string;
  edad: number;


  constructor() {
    this.identificacion = 0;
    this.nombreCompleto = '';
    this.correo = '';
    this.telefono = '';
    this.semestre = 0;
    this.contrasena = '';
    this.edad = 0;
  }
}