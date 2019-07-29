import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mf-receiver',
  templateUrl: './mf-app2.component.html',
  styleUrls: ['./mf-app2.component.css']
})
export class MfApp2Component implements OnInit {

  // tslint:disable-next-line:variable-name
  _message = '';
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set message(message: string) {
    this._message = message;

  }
  get message(): string { return this._message; }
}
