import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { MfApp1Module } from "./app/mf-app1.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MfApp1Module)
  .catch(err => console.error(err));
