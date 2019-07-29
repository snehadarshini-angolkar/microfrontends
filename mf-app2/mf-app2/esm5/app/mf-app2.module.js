/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createCustomElement } from '@angular/elements';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { MfApp2Component } from "./mf-app2.component";
var MfApp2Module = /** @class */ (function () {
    function MfApp2Module(injector) {
        this.injector = injector;
        /** @type {?} */
        var app = createCustomElement(MfApp2Component, { injector: injector });
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
    MfApp2Module.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return MfApp2Module;
}());
export { MfApp2Module };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MfApp2Module.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWYtYXBwMi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tZi1hcHAyLyIsInNvdXJjZXMiOlsiYXBwL21mLWFwcDIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RDtJQWVFLHNCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVOztZQUM5QixHQUFHLEdBQUcsbUJBQW1CLENBQUMsZUFBZSxFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQztRQUM5RCxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsb0NBQWE7OztJQUFiLGNBQWlCLENBQUM7O2dCQXBCbkIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3FCQUNkO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNkLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDbEM7Ozs7Z0JBakJrQixRQUFROztJQXlCM0IsbUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQVBZLFlBQVk7Ozs7OztJQUNYLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWZBcHAyQ29tcG9uZW50IH0gZnJvbSBcIi4vbWYtYXBwMi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWZBcHAyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gZW50cnlDb21wb25lbnRzOiBbTWZBcHAyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNZkFwcDJNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGFwcCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoTWZBcHAyQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWYtYXBwMicsIGFwcCk7XG4gIH1cblxuICBuZ0RvQm9vdHN0cmFwKCkge31cbn1cbiJdfQ==