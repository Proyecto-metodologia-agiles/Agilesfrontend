export class MiembroComite {
  identificacion: number;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  contraseña: number;

  constructor() {
    this.identificacion = 0;
    this.nombreCompleto = '';
    this.correo = '';
    this.telefono = '';
    this.contraseña = 0;
  }
}