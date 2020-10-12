export class MiembroComite {
  Identification: string;
  FullName: string;
  Email: string;
  Phone: string;
  Password: string;

  constructor() {
    this.FullName = '';
    this.Email = '';
    this.Phone = '';
    this.Identification = '';
    this.Password = '';
  }
}