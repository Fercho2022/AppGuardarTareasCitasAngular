import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-cita',
  templateUrl: './list-cita.component.html',
  styleUrls: ['./list-cita.component.css']
})
export class ListCitaComponent {

@Input() listadoCitas:any;
@Output() deleteCita=new EventEmitter<number>();

  constructor(){


  }

ngOnInit(){


}

eliminarCita(index:number){

  this.deleteCita.emit(index);

}
}
