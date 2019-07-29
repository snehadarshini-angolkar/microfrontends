import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule, MatCardModule} from '@angular/material';
import { MfApp1Service } from "./services/mf-app1.service";
import { HttpClientModule } from "@angular/common/http";
import { MfApp1Component } from "./mf-app1.component";

@NgModule({
  declarations: [
    MfApp1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [MfApp1Service],
 entryComponents: [MfApp1Component]
})
export class MfApp1Module {
  constructor(private injector: Injector) {
    const app1 = createCustomElement(MfApp1Component, { injector });
    customElements.define('mf-app1', app1);
  }

  ngDoBootstrap() {}
}
