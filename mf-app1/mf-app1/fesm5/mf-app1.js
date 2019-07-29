import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, Component, NgModule, Injector } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MfApp1Service = /** @class */ (function () {
    function MfApp1Service(http) {
        this.http = http;
    }
    /**
     * @return {?}
     */
    MfApp1Service.prototype.getHtml = /**
     * @return {?}
     */
    function () {
        return this.http.get('/load', { responseType: (/** @type {?} */ ('text/html')) });
    };
    MfApp1Service.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MfApp1Service.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return MfApp1Service;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MfApp1Component = /** @class */ (function () {
    function MfApp1Component(mfApp1Service) {
        this.mfApp1Service = mfApp1Service;
    }
    /**
     * @return {?}
     */
    MfApp1Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mfApp1Service.getHtml().subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.html = value;
        }));
    };
    MfApp1Component.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'mf-app1',
                    template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 1</mat-card-title>\n    </mat-card-header>\n   \n    <mat-card-content>\n        <div [innerHTML]=\"html\">\n\n        </div>\n       \n    </mat-card-content>\n\n</mat-card>\n",
                    styles: [".example-card{max-width:400px;background-color:#5b9cf1}.example-full-width{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    MfApp1Component.ctorParameters = function () { return [
        { type: MfApp1Service }
    ]; };
    return MfApp1Component;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MfApp1Module = /** @class */ (function () {
    function MfApp1Module(injector) {
        this.injector = injector;
        /** @type {?} */
        var app1 = createCustomElement(MfApp1Component, { injector: injector });
        customElements.define('mf-app1', app1);
    }
    /**
     * @return {?}
     */
    MfApp1Module.prototype.ngDoBootstrap = /**
     * @return {?}
     */
    function () { };
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
    MfApp1Module.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return MfApp1Module;
}());

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