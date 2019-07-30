import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, Component, NgModule, Injector } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MfApp1Service {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    getHtml() {
        //return  this.http.get('/load',{ responseType: 'text/html' as 'text'});
        return of({});
    }
}
MfApp1Service.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MfApp1Service.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MfApp1Component {
    /**
     * @param {?} mfApp1Service
     */
    constructor(mfApp1Service) {
        this.mfApp1Service = mfApp1Service;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mfApp1Service.getHtml().subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.html = value;
        }));
    }
}
MfApp1Component.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'mf-app1',
                template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 1</mat-card-title>\n    </mat-card-header>\n   \n    <mat-card-content>\n        <div>\n            {{html}}\n        </div>\n       \n    </mat-card-content>\n\n</mat-card>\n",
                styles: [".example-card{max-width:400px;background-color:#5b9cf1}.example-full-width{width:100%}"]
            }] }
];
/** @nocollapse */
MfApp1Component.ctorParameters = () => [
    { type: MfApp1Service }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MfApp1Module {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /** @type {?} */
        const app1 = createCustomElement(MfApp1Component, { injector });
        customElements.define('mf-app1', app1);
    }
    /**
     * @return {?}
     */
    ngDoBootstrap() { }
}
MfApp1Module.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
/** @nocollapse */
MfApp1Module.ctorParameters = () => [
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MfApp1Module, MfApp1Component as ɵa, MfApp1Service as ɵb };

//# sourceMappingURL=mf-app1.js.map