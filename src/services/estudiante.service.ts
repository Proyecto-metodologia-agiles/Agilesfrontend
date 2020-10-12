import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from 'src/models/estudiante';

const URLESTUDIANTE_GET = 'https://localhost:44325/api/Estudiante/Estudiantes';
const URLESTUDIANTE_GUARDAR = 'https://localhost:44325/api/Estudiante/Post';
@Injectable({ providedIn: 'root' })
export class ServiceEstudianteService {
    constructor(private httpClient: HttpClient) { }

    async getEstudiantes() {
        return this.httpClient.get<Estudiante[]>(URLESTUDIANTE_GET);
    }
    addEstudiante(estudiante: Estudiante) {
        this.httpClient.post(URLESTUDIANTE_GUARDAR, estudiante).subscribe(
            (resp) => {
                console.log(resp)
                return resp;
            });
    }

}