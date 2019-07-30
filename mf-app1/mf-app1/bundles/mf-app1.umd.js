(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/elements'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/material'), require('rxjs'), require('@angular/common/http'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mf-app1', ['exports', '@angular/elements', '@angular/platform-browser', '@angular/forms', '@angular/material', 'rxjs', '@angular/common/http', '@angular/core'], factory) :
    (factory((global['mf-app1'] = {}),global.ng.elements,global.ng.platformBrowser,global.ng.forms,global.ng.material,global.rxjs,global.ng.common.http,global.ng.core));
}(this, (function (exports,elements,platformBrowser,forms,material,rxjs,http,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MfApp1Service = /** @class */ (function () {
        function MfApp1Service(http$$1) {
            this.http = http$$1;
        }
        /**
         * @return {?}
         */
        MfApp1Service.prototype.getHtml = /**
         * @return {?}
         */
            function () {
                //return  this.http.get('/load',{ responseType: 'text/html' as 'text'});
                return rxjs.of({});
            };
        MfApp1Service.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MfApp1Service.ctorParameters = function () {
            return [
                { type: http.HttpClient }
            ];
        };
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
                this.mfApp1Service.getHtml().subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    _this.html = value;
                }));
            };
        MfApp1Component.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'mf-app1',
                        template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 1</mat-card-title>\n    </mat-card-header>\n   \n    <mat-card-content>\n        <div>\n            {{html}}\n        </div>\n       \n    </mat-card-content>\n\n</mat-card>\n",
                        styles: [".example-card{max-width:400px;background-color:#5b9cf1}.example-full-width{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        MfApp1Component.ctorParameters = function () {
            return [
                { type: MfApp1Service }
            ];
        };
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
            var app1 = elements.createCustomElement(MfApp1Component, { injector: injector });
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
            { type: core.NgModule, args: [{
                        declarations: [
                            MfApp1Component
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            material.MatButtonModule,
                            material.MatInputModule,
                            material.MatCardModule,
                            http.HttpClientModule
                        ],
                        providers: [MfApp1Service],
                        entryComponents: [MfApp1Component]
                    },] }
        ];
        /** @nocollapse */
        MfApp1Module.ctorParameters = function () {
            return [
                { type: core.Injector }
            ];
        };
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

    exports.MfApp1Module = MfApp1Module;
    exports.ɵa = MfApp1Component;
    exports.ɵb = MfApp1Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mf-app1.umd.js.map