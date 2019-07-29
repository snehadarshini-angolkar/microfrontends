import { createCustomElement } from '@angular/elements';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { MfApp2Component } from "./mf-app2.component";

@NgModule({
  declarations: [
    MfApp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
 entryComponents: [MfApp2Component]
})
export class MfApp2Module {
  constructor(private injector: Injector) {
    const app = createCustomElement(MfApp2Component, { injector });
    customElements.define('mf-app2', app);
  }

  ngDoBootstrap() {}
}
