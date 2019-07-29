import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MfApp1Service } from "./services/mf-app1.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mf-app1',
  templateUrl: './mf-app1.component.html',
  styleUrls: ['./mf-app1.component.css']
})
export class MfApp1Component implements OnInit {
  html : any;

  constructor(private mfApp1Service: MfApp1Service) { }
  ngOnInit() {
    this.mfApp1Service.getHtml().subscribe((value) => {
      this.html = value;
    });
  }


}
