import { createCustomElement } from '@angular/elements';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component, Input, NgModule, Injector } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MfApp2Component {
    constructor() {
        // tslint:disable-next-line:variable-name
        this._message = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} message
     * @return {?}
     */
    set message(message) {
        this._message = message;
    }
    /**
     * @return {?}
     */
    get message() { return this._message; }
}
MfApp2Component.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'mf-receiver',
                template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 2</mat-card-title>\n    </mat-card-header>\n   \n    <mat-card-content>\n     Angular app\n       \n    </mat-card-content>\n\n</mat-card>\n",
                styles: [".example-card{max-width:400px;background-color:#b995ea;min-height:200px}.example-full-width{width:100%}"]
            }] }
];
/** @nocollapse */
MfApp2Component.ctorParameters = () => [];
MfApp2Component.propDecorators = {
    message: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MfApp2Module {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        /** @type {?} */
        const app = createCustomElement(MfApp2Component, { injector });
        customElements.define('mf-app2', app);
    }
    /**
     * @return {?}
     */
    ngDoBootstrap() { }
}
MfApp2Module.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
/** @nocollapse */
MfApp2Module.ctorParameters = () => [
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

export { MfApp2Module, MfApp2Component as ɵa };

//# sourceMappingURL=mf-app2.js.map