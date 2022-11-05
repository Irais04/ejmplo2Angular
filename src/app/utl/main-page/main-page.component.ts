import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //PADRE:

  
  //

  regAlumno:AlumnosUtl={
    nombre:'Pablo',
    edad:24
  }

  //HIJO A PADRE

 

}
