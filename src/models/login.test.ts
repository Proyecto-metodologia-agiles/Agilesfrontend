import { Login } from './login';

export const casosDePruebaLogin: Login[] = [
      { Email: 'jashsajkkjkas', Password: '' } ,//no aceptable
      null ,//no aceptable
      { Email: '', Password: 'kaskalalal' } ,//no aceptable
      { Email: null, Password: null } ,//no aceptable
      { Email: 'asesortres@gmail.com', Password: 'mpEqIzYLUXmAP7e'} //aceptable
];