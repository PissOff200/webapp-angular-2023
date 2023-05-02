import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: any = [];
  project: any = [];
  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
    this.cargarProject();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.info = resp;
      });
  }
  private cargarEquipo() { //Donde revisamos la info de Firebase
    this.http.get('https://lalala-d4e5b-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: InfoPagina) => {
        this.equipo = resp;
        console.log(resp);
      });
  }


// Leer el archivo JSON externo en la Real Time DataBase de Firebase de Google
private cargarProject() {
  this.http
    .get(
      'https://etif-curso-webapp-angular-2023-default-rtdb.europe-west1.firebasedatabase.app/projects.json'
    )
    .subscribe((resp: InfoPagina) => {
      this.project = resp; // provar resp. I veurem les propietats JSON
      console.log(resp);
    });
}
}