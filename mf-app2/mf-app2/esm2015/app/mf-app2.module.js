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
export class MfApp2Module {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    MfApp2Module.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWYtYXBwMi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tZi1hcHAyLyIsInNvdXJjZXMiOlsiYXBwL21mLWFwcDIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWdCdEQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFDdkIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs7Y0FDOUIsR0FBRyxHQUFHLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzlELGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxhQUFhLEtBQUksQ0FBQzs7O1lBcEJuQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixjQUFjO29CQUNkLGFBQWE7aUJBQ2Q7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2QsZUFBZSxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQ2xDOzs7O1lBakJrQixRQUFROzs7Ozs7O0lBbUJiLGdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWZBcHAyQ29tcG9uZW50IH0gZnJvbSBcIi4vbWYtYXBwMi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWZBcHAyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG4gZW50cnlDb21wb25lbnRzOiBbTWZBcHAyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNZkFwcDJNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIGNvbnN0IGFwcCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoTWZBcHAyQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWYtYXBwMicsIGFwcCk7XG4gIH1cblxuICBuZ0RvQm9vdHN0cmFwKCkge31cbn1cbiJdfQ==