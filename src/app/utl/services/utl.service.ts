import { Injectable } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interface';

@Injectable({
  providedIn: 'root'
})
export class UtlService {

  private _alumnosUtl:AlumnosUtl[]=[
    {
      nombre: 'Gustavo',
      edad: 20
    },
    {
      nombre: 'Juan Carlos',
      edad: 21
    },
    {
      nombre: 'Rosa',
      edad: 24
    }


  ]

  constructor() { }

  //MANDAR A LLAMARLO PORQUE ES PRIVADO 

  get alumnos(): AlumnosUtl[]{
    //MANDAR A LLEVAR POR REFERENCIA 
    return[...this._alumnosUtl];
  }

  agregarNuevoAlumno(datos:AlumnosUtl){

    //ESTOS DATOS SON DEL HIJO
    this._alumnosUtl.push(datos);
  }
}
