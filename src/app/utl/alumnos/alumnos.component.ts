import { Component, Input } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  //Lamar a los datos del padre

  //@Input() alumnosUtl:AlumnosUtl[]=[];

  //MANDAR A LLAMRA A LOS SERVICIOS
 get alumnos(){
    return this.alumnosUtl.alumnos;
  }

  constructor(private alumnosUtl:UtlService){}

  

}

