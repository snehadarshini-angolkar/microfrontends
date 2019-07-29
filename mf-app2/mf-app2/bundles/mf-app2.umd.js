(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/elements'), require('@angular/material'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mf-app2', ['exports', '@angular/elements', '@angular/material', '@angular/forms', '@angular/platform-browser', '@angular/core'], factory) :
    (factory((global['mf-app2'] = {}),global.ng.elements,global.ng.material,global.ng.forms,global.ng.platformBrowser,global.ng.core));
}(this, (function (exports,elements,material,forms,platformBrowser,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MfApp2Component = /** @class */ (function () {
        function MfApp2Component() {
            // tslint:disable-next-line:variable-name
            this._message = '';
        }
        /**
         * @return {?}
         */
        MfApp2Component.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        Object.defineProperty(MfApp2Component.prototype, "message", {
            get: /**
             * @return {?}
             */ function () { return this._message; },
            set: /**
             * @param {?} message
             * @return {?}
             */ function (message) {
                this._message = message;
            },
            enumerable: true,
            configurable: true
        });
        MfApp2Component.decorators = [
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'mf-receiver',
                        template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 2</mat-card-title>\n    </mat-card-header>\n   \n    <mat-card-content>\n     Angular app\n       \n    </mat-card-content>\n\n</mat-card>\n",
                        styles: [".example-card{max-width:400px;background-color:#b995ea;min-height:200px}.example-full-width{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        MfApp2Component.ctorParameters = function () { return []; };
        MfApp2Component.propDecorators = {
            message: [{ type: core.Input }]
        };
        return MfApp2Component;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MfApp2Module = /** @class */ (function () {
        function MfApp2Module(injector) {
            this.injector = injector;
            /** @type {?} */
            var app = elements.createCustomElement(MfApp2Component, { injector: injector });
            customElements.define('mf-app2', app);
        }
        /**
         * @return {?}
         */
        MfApp2Module.prototype.ngDoBootstrap = /**
         * @return {?}
         */
            function () { };
        MfApp2Module.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            MfApp2Component
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            material.MatButtonModule,
                            material.MatInputModule,
                            material.MatCardModule
                        ],
                        providers: [],
                        entryComponents: [MfApp2Component]
                    },] }
        ];
        /** @nocollapse */
        MfApp2Module.ctorParameters = function () {
            return [
                { type: core.Injector }
            ];
        };
        return MfApp2Module;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.MfApp2Module = MfApp2Module;
    exports.ɵa = MfApp2Component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mf-app2.umd.js.map