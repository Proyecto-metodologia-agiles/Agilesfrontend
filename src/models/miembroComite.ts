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

  getPassword() {
    let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
    let contraseña = "";
    for (let i = 0; i < 15; i++) {
      contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contraseña;
  }

}

export class ValoracionProyecto {
  ProjectId: number;
  Valoration: string;
  Observation: string;

  constructor() {
    this.ProjectId = 0;
    this.Valoration = '';
    this.Observation = '';
  }
}