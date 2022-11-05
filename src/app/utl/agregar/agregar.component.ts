import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';
import { UtlService } from '../services/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //@Output() onNuevoAlumno: EventEmitter<AlumnosUtl>= new EventEmitter();

  @Input() regAlumno:AlumnosUtl={
    nombre: '',
    edad: 0
  }

  constructor(private alumnosUtl:UtlService){}


  agregar(){
    //console.log(this.regAlumno);
    //this.alumnosUtl.push(this.regAlumno);
    
    //this.onNuevoAlumno.emit(this.regAlumno);
    
    this.alumnosUtl.agregarNuevoAlumno(this.regAlumno)
    this.regAlumno={
      nombre:'',
      edad:0
    }
  }

}
