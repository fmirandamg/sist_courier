import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cr-perfil',
  templateUrl: './cr-perfil.component.html',
  styleUrls: ['./cr-perfil.component.css']
})
export class CrPerfilComponent implements OnInit{
  tip_id: any[] = [];
  pais: any[] = [];
  provincia: any[] = [];
  canton: any[] = [];
  tipo_persona: string = 'P';

  ngOnInit() {

    this.pais = [
      { name: 'ECUADOR', value: "EC" }
   ];

    this.tip_id = [
      { name: 'PERSONA', value: "P" },
      { name: 'EMPRESA', value: "E" }
   ]; 

   this.provincia = [
    { name: 'GUAYAS', value: "P" },
    { name: 'AZUAY', value: "E" }
   ]; 

   this.canton= [
    { name: 'GUAYAQUIL', value: "P" },
    { name: 'DURAN', value: "E" }
   ]; 

  }

  cambioTipo(event:any) {
    console.log('event :' + event);
    console.log(event.value.value);
    this.tipo_persona = event.value.value;
   }

}
