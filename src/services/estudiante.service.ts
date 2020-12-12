import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from 'src/models/estudiante';
import Swal from 'sweetalert2';
import { HOST_DATABASE } from 'src/database/host.database';

const URLESTUDIANTE_GET = HOST_DATABASE + 'Estudiante/Estudiantes';
const URLESTUDIANTESINPROYECTO_GET = HOST_DATABASE + 'Estudiante/EstudiantesSinProyecto';
const URLESTUDIANTE_GUARDAR = HOST_DATABASE + 'Estudiante/Post';
@Injectable({ providedIn: 'root' })
export class ServiceEstudianteService {
    constructor(private httpClient: HttpClient) { }

    async getEstudiantes() {
        return this.httpClient.get<Estudiante[]>(URLESTUDIANTE_GET);
    }

    async getEstudiantesSinProyecto() {
        return this.httpClient.get<Estudiante[]>(URLESTUDIANTESINPROYECTO_GET);
    }

    addEstudiante(estudiante: Estudiante) {
        this.httpClient.post(URLESTUDIANTE_GUARDAR, estudiante).subscribe(Response => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El Estudiante ha sido guardado con éxito',
                showConfirmButton: false,
                timer: 1500
            });
        }, error => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Problemas al intentar guardar el nuevo estudiante',
                showConfirmButton: false,
                timer: 1500
            });
        });
    }

}