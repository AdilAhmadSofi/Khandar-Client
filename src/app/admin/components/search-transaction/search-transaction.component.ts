import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-transaction',
  templateUrl: './search-transaction.component.html',
  styleUrls: ['./search-transaction.component.css']
})
export class SearchTransactionComponent implements OnInit {
 @Output()fromDateEvent = new EventEmitter<any>;
 @Output()toDateEvent = new EventEmitter<any>;
 @Output()asOfNowEvent = new EventEmitter<any>;


  constructor() { }

  ngOnInit(): void {
  }

  fromDateFun(value:string){
    this.fromDateEvent.emit(value);
  }
  toDateFun(value:string){
    this.toDateEvent.emit(value);
  }

  asOfNowFun(value:string){
    this.asOfNowEvent.emit(value);
  }

}
