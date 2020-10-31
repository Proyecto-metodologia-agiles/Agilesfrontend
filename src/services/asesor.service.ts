import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { asesores } from 'src/models/asesores';
import Swal from 'sweetalert2';
import { HOST_DATABASE } from 'src/database/host.database';

const URLASESOR_GET = HOST_DATABASE + 'Asesor/Asesores';
const URLASESORMETODOLOGICO_GET = HOST_DATABASE + 'Asesor/AsesoresMetodologicos';
const URLASESORTEMATICO_GET = HOST_DATABASE + 'Asesor/AsesoresTematicos';
const URLASESOR_GUARDAR = HOST_DATABASE + 'Asesor/Post';
@Injectable({ providedIn: 'root' })
export class ServiceAsesorService {
    constructor(private httpClient: HttpClient) { }

    async getAsesores() {
        return this.httpClient.get<asesores[]>(URLASESOR_GET);
    }

    async getAsesoresMetodologicos() {
        return this.httpClient.get<asesores[]>(URLASESORMETODOLOGICO_GET);
    }

    async getAsesoresTematicos() {
        return this.httpClient.get<asesores[]>(URLASESORTEMATICO_GET);
    }

    addAsesor(asesor: asesores) {
        this.httpClient.post(URLASESOR_GUARDAR, asesor).subscribe(Response => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El asesor ha sido guardado con éxito',
                showConfirmButton: false,
                timer: 1500
            });
        }, error => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Problemas al intentar guardar el nuevo asesor',
                showConfirmButton: false,
                timer: 1500
            });
        });
    }
}