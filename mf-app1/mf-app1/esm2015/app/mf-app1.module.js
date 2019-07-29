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
export class MfApp1Module {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    MfApp1Module.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWYtYXBwMS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tZi1hcHAxLyIsInNvdXJjZXMiOlsiYXBwL21mLWFwcDEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFpQnRELE1BQU0sT0FBTyxZQUFZOzs7O0lBQ3ZCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7O2NBQzlCLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUMvRCxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsYUFBYSxLQUFJLENBQUM7OztZQXJCbkIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixlQUFlO2lCQUNoQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUMzQixlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDbEM7Ozs7WUFyQmtCLFFBQVE7Ozs7Ozs7SUF1QmIsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNZkFwcDFTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbWYtYXBwMS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBNZkFwcDFDb21wb25lbnQgfSBmcm9tIFwiLi9tZi1hcHAxLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNZkFwcDFDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtNZkFwcDFTZXJ2aWNlXSxcbiBlbnRyeUNvbXBvbmVudHM6IFtNZkFwcDFDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1mQXBwMU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgY29uc3QgYXBwMSA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoTWZBcHAxQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWYtYXBwMScsIGFwcDEpO1xuICB9XG5cbiAgbmdEb0Jvb3RzdHJhcCgpIHt9XG59XG4iXX0=