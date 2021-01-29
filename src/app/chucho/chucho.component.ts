import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chucho',
  templateUrl: './chucho.component.html',
  styleUrls: ['./chucho.component.css']
})
export class ChuchoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() nombre: string;
  @Input() raza: string;
  @Output() emisor = new EventEmitter(); 


  ladrar(){
    this.emisor.emit('Guuuaaauu');
  }

}
