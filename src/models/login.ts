export class Login {
  Email: string;
  Password: string;

  constructor() {
    this.Email = '';
    this.Password = '';
  }
}

export class sesion {
  email: string;
  fail: boolean;
  id: string;
  idetification: string;
  message: string;
  name: string;
  telephone: string;
  type: string;

  constructor() {
    this.email = '';
    this.fail = true;
    this.id = '';
    this.idetification = '';
    this.message = '';
    this.name = '';
    this.telephone = '';
    this.type = '';
  }

}

export class actualizar_contrasena {
  identification: string;
  Password: string;
}