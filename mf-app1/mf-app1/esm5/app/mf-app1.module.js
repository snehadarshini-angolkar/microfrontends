/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';
import { MfApp1Service } from "./services/mf-app1.service";
import { HttpClientModule } from "@angular/common/http";
import { MfApp1Component } from "./mf-app1.component";
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
export { MfApp1Module };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MfApp1Module.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWYtYXBwMS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tZi1hcHAxLyIsInNvdXJjZXMiOlsiYXBwL21mLWFwcDEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQ7SUFnQkUsc0JBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7O1lBQzlCLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO1FBQy9ELGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxvQ0FBYTs7O0lBQWIsY0FBaUIsQ0FBQzs7Z0JBckJuQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzNCLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDbEM7Ozs7Z0JBckJrQixRQUFROztJQTZCM0IsbUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQVBZLFlBQVk7Ozs7OztJQUNYLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWZBcHAxU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL21mLWFwcDEuc2VydmljZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgTWZBcHAxQ29tcG9uZW50IH0gZnJvbSBcIi4vbWYtYXBwMS5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWZBcHAxQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTWZBcHAxU2VydmljZV0sXG4gZW50cnlDb21wb25lbnRzOiBbTWZBcHAxQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNZkFwcDFNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGFwcDEgPSBjcmVhdGVDdXN0b21FbGVtZW50KE1mQXBwMUNvbXBvbmVudCwgeyBpbmplY3RvciB9KTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ21mLWFwcDEnLCBhcHAxKTtcbiAgfVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7fVxufVxuIl19