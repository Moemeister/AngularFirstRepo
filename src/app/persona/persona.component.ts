import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre: string;
  dni: string;
  lista: string[] = [];
  buttonStatus: boolean = true;

  teclear(event){
   this.nombre = event.target.value;
   this.nombre.length > 0 ? this.buttonStatus = false : this.buttonStatus = true;
  }

  agregar(){  
    this.lista.push(this.dni);
  }

  remover(index: number){
    this.lista.splice(index,1);
  }
   

}
