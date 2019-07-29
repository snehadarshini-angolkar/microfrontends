/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { MfApp1Service } from "./services/mf-app1.service";
export class MfApp1Component {
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
                template: "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <mat-card-title>Micro Frontend App 1</mat-card-title>\n    </mat-card-header>\n   \n    <mat-card-content>\n        <div [innerHTML]=\"html\">\n\n        </div>\n       \n    </mat-card-content>\n\n</mat-card>\n",
                styles: [".example-card{max-width:400px;background-color:#5b9cf1}.example-full-width{width:100%}"]
            }] }
];
/** @nocollapse */
MfApp1Component.ctorParameters = () => [
    { type: MfApp1Service }
];
if (false) {
    /** @type {?} */
    MfApp1Component.prototype.html;
    /**
     * @type {?}
     * @private
     */
    MfApp1Component.prototype.mfApp1Service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWYtYXBwMS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tZi1hcHAxLyIsInNvdXJjZXMiOlsiYXBwL21mLWFwcDEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE2QixNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFRM0QsTUFBTSxPQUFPLGVBQWU7Ozs7SUFHMUIsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBSSxDQUFDOzs7O0lBQ3JELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsK1JBQXVDOzthQUV4Qzs7OztZQVBRLGFBQWE7Ozs7SUFTcEIsK0JBQVc7Ozs7O0lBRUMsd0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZkFwcDFTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbWYtYXBwMS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWYtYXBwMScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZi1hcHAxLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWYtYXBwMS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWZBcHAxQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaHRtbCA6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1mQXBwMVNlcnZpY2U6IE1mQXBwMVNlcnZpY2UpIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1mQXBwMVNlcnZpY2UuZ2V0SHRtbCgpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgIHRoaXMuaHRtbCA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cblxufVxuIl19