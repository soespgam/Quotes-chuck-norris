import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quoteComponent',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {

  @Input() datoQuote : string;

  constructor() { }

  ngOnInit() {}

}
