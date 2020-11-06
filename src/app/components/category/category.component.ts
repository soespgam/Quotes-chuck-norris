import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  private status: boolean = false;
  @Input() category: Object;
  @Output() changeStatus = new EventEmitter();
  @Output() quote = new EventEmitter();
 
  constructor() { }

  ngOnInit() {}
 
  changeStus(){
    this.changeStatus.emit(this.category)
  }

  getQuote(){
    this.quote.emit()
    console.log("click")
  }

  
}
