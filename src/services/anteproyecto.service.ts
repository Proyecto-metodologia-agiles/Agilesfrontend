import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Anteproyecto } from 'src/models/anteproyecto';
import { isInteger, toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import Swal from 'sweetalert2';
import { HOST_DATABASE } from 'src/database/host.database';

const URLANTEPROYECTO_GET = HOST_DATABASE + 'Project/Proyectos';
const URLANTEPROYECTO_GUARDAR = HOST_DATABASE + 'Project/Post';
const URLANTEPROYECTO_GET_ADVISOR = HOST_DATABASE + 'Project/Proyectos';
const URLANTEPROYECTO_GET_ASIGNADOS = HOST_DATABASE + 'Project/Proyectos';
@Injectable({ providedIn: 'root' })
export class ServiceAnteproyectoService {
    constructor(private httpClient: HttpClient) { }

    async getAnteproyecto() {
        return this.httpClient.get<Anteproyecto[]>(URLANTEPROYECTO_GET);
    }

    async getAnteproyectAsignados() {
        return this.httpClient.get<Anteproyecto[]>(URLANTEPROYECTO_GET_ASIGNADOS);
    }

    async getAnteproyectoAsesor() {
        return this.httpClient.get<Anteproyecto[]>(URLANTEPROYECTO_GET_ADVISOR);
    }

    addAnteproyecto(anteproyecto: Anteproyecto) {

        let datos = new FormData();

        datos.append("Title", anteproyecto.Title);
        datos.append('Archive', anteproyecto.Archive);
        datos.append("Focus", anteproyecto.Focus);
        datos.append("Cut", anteproyecto.Cut.toString());
        datos.append("Line", anteproyecto.Line);
        datos.append("Thematic_Advisor", anteproyecto.Thematic_Advisor.toString())
        datos.append("Metodologic_Advisor", anteproyecto.Methodologic_Advisor.toString());
        datos.append("Student_1", anteproyecto.Student_1);
        datos.append("Student_2", anteproyecto.Student_2);

        console.log(anteproyecto);


        this.httpClient.post(URLANTEPROYECTO_GUARDAR, datos).subscribe(Response => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El AnteProyecto ha sido guardado con éxito',
                showConfirmButton: false,
                timer: 1500
            });
        }, error => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Problemas al intentar guardar el anteproyecto',
                showConfirmButton: false,
                timer: 1500
            });
        });


    }

}