import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from 'src/models/estudiante';

const URLASESOR = 'https://localhost:44325/api/Estudiante/get';
const URLASESOR_GUARDAR = 'https://localhost:44325/api/Estudiante/Post';
@Injectable({ providedIn: 'root' })
export class ServiceEstudianteService {
    constructor(private httpClient: HttpClient) { }


    addAsesor(estudiante: Estudiante) {
        this.httpClient.post(URLASESOR_GUARDAR, estudiante).subscribe(
            (resp) => {
                console.log(resp)
                return resp;
            });
    }

}