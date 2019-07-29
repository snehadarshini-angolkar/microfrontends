import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { MfApp2Module } from "./app/mf-app2.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MfApp2Module)
  .catch(err => console.error(err));
