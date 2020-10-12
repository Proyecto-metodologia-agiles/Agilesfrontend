export class MiembroComite {
  identificacion: number;
  nombreCompleto: string;
  correo: string;
  telefono: string;
  contraseña: number;

  constructor() {
    this.nombreCompleto = '';
    this.correo = '';
    this.telefono = '';
    this.identificacion = 0;
    this.contraseña = 0;
  }
}