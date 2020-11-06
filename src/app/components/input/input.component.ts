import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  private dato:string;
  @Input() datoUser: string;
  @Output() sendDate = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  enviaReg(){
    this.sendDate.emit(this.dato)
  }
}
 