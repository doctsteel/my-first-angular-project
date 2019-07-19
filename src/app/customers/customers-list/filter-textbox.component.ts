import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'filter-textbox',
  templateUrl: './filter-textbox.component.html'
})

export class FilterTextboxComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter); // raise changed event
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

}
