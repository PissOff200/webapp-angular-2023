import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [
  ]
})
export class ProyectosComponent {
  constructor ( public infoService: InfoPaginaService){}
}