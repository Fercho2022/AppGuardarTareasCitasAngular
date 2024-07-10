import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  @Output() nuevaCita= new EventEmitter<any>();

  nombre= '';
  fecha= '';
  hora= '';
  sintomas= '';
  formularioIncorrecto= false;

  constructor(){


  }

  ngOnInit(){

  }

  agregarCita(){
      if(this.nombre=='' || this.fecha=='' || this.hora=='' || this.sintomas==''){
        this.formularioIncorrecto=true;
        return;

      }else{
        this.formularioIncorrecto=false;

      const CITA={
        nombre: this.nombre,
        fecha:this.fecha,
        hora:this.hora,
        sintomas:this.sintomas
      }
      this.nuevaCita.emit(CITA);

      this.resetCampos();
      }



  }
  resetCampos(){

    this.nombre='';
    this.fecha='';
    this.hora='';
    this.sintomas='';
}



}
