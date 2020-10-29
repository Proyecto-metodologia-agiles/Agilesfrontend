import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MiembroComite } from 'src/models/miembroComite';

const URL_MIEMBRO_POST = 'http://localhost:44325/api/CommitteeMember/Post'
const URL_MIEMBRO_GET = 'http://localhost:44325/api/CommitteeMember/MiembrosComite'
@Injectable({ providedIn: 'root' })
export class MiembroComiteService {
    public Profesores = [
        { name: "ING BRAULIO BARRIOS ZUÑIGA", img: '../../../assets/profesores_comite/01brauilio.jpg', type: "Director" },
        { name: "ING GLORIA ROSADO GALINDO", img: '../../../assets/profesores_comite/02inggloria.jpg', type: "Secretaria" },
        { name: "ING NEHEMIAS SARABIA", img: '../../../assets/profesores_comite/03nehemias.jpg', type: "Relaciones InterEmpresariales" },
        { name: "ING ANYA BOLAÑO ARIAS", img: '../../../assets/profesores_comite/04anya.jpg', type: "Desarrollo de Software" },
        { name: "ING MARIBEL ROMERO MESTRE", img: '../../../assets/profesores_comite/05ingmaribel.jpg', type: "Ingeniería de Sistemas y Computación" },
        { name: "ING ADITH PÉREZ BISMARCK", img: '../../../assets/profesores_comite/06ingadith.jpg', type: "Automatización y Control de Procesos" },
        { name: "ING TONNY JIMENEZ MARQUEZ", img: '../../../assets/profesores_comite/07tonny.jpg', type: "Inteligencia Artificial y Computación Emergente" },
        { name: "ING CESAR ACOSTA DIAZ", img: '../../../assets/profesores_comite/08cesar.jpg', type: "Magíster en Educación" },
        { name: "ING ILDEFONSO DAVID RAMIREZ", img: '../../../assets/profesores_comite/09ildefonso.jpg', type: "Magíster en Sistemas Computacionales" },
        { name: "ING DAVID ARTURO MANOTAS FERIAS", img: '../../../assets/profesores_comite/10manotas.jpg', type: "Magister en telematica y telecomunicaciones" },
        { name: "ING BRINULFO ALVAREZ MILLAN", img: '../../../assets/profesores_comite/11brinulfo.jpg', type: "Magíster en Gerencia de Proyectos" },
    ];

    constructor(private httpClient: HttpClient) { }

    async getMiembroComite() {
        return this.httpClient.get<MiembroComite[]>(URL_MIEMBRO_GET);
    }


    addmiembroComite(comite: MiembroComite) {
        this.httpClient.post(URL_MIEMBRO_POST, comite).subscribe(
            (resp) => {
                console.log(resp)
                return resp;
            });
    }

}