import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Anteproyecto, updateDocumento } from 'src/models/anteproyecto';
import Swal from 'sweetalert2';
import { HOST_DATABASE } from 'src/database/host.database';
import { evaluacion } from 'src/models/evaluacion';
import { ValoracionProyecto } from 'src/models/miembroComite';

const URLANTEPROYECTO_GET = HOST_DATABASE + 'Project/Proyectos';
const URLANTEPROYECTO_GUARDAR = HOST_DATABASE + 'Project/Post';
const URLANTEPROYECTO_GET_ADVISOR = HOST_DATABASE + 'Project/Proyectos';
const URLASESOR_POST_ASIGNADOS = HOST_DATABASE + 'Asesor/GetProyectosAsociados?id=';
const URLPORYECTO_EVALUADOS = HOST_DATABASE + 'Evaluation/EvaluationsStudent?identification=';
const URLPROYECTO_VALORADO = HOST_DATABASE + 'Valoration/ValorationsStudent?identification=';
const URLANTEPROYECTO_ACTUALIZAR = HOST_DATABASE + 'Project/Pust';
@Injectable({ providedIn: 'root' })
export class ServiceAnteproyectoService {
    constructor(private httpClient: HttpClient) { }

    async getAnteproyecto() {
        return this.httpClient.get<Anteproyecto[]>(URLANTEPROYECTO_GET);
    }

    async getAsesorAsignado(id: string) {
        return this.httpClient.get<Anteproyecto[]>(URLASESOR_POST_ASIGNADOS + id);
    }


    async getProyectoEvaluados(id: string) {
        return this.httpClient.get<evaluacion[]>(URLPORYECTO_EVALUADOS + id);
    }
    async getProyectoValorados(id: string) {
        return this.httpClient.get<ValoracionProyecto[]>(URLPROYECTO_VALORADO + id);
    }

    async getAnteproyectoAsesor() {
        return this.httpClient.get<Anteproyecto[]>(URLANTEPROYECTO_GET_ADVISOR);
    }


    async updateArchivoProyecto(data: updateDocumento) {
        let datos = new FormData();

        datos.append("Id", data.Id);
        datos.append("Archive", data.IFormFile);

        this.httpClient.put(URLANTEPROYECTO_ACTUALIZAR, datos).subscribe((Response: any) => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: Response.message,
                showConfirmButton: false,
                timer: 1500
            });

        });
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

        this.httpClient.post(URLANTEPROYECTO_GUARDAR, datos).subscribe(Response => {
            console.log(Response);

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