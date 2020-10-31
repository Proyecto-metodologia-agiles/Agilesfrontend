export class Login {
  Email: string;
  Password: string;

  constructor() {
    this.Email = '';
    this.Password = '';
  }
}

export interface sesion {
  email: string;
  fail: boolean;
  id: string;
  idetification: string;
  message: string;
  name: string;
  telephone: string;
  type: string;
}