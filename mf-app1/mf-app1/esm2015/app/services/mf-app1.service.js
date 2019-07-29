/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
export class MfApp1Service {
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
        return this.http.get('/load', { responseType: (/** @type {?} */ ('text/html')) });
    }
}
MfApp1Service.decorators = [
    { type: Injectable }
];
/** @nocollapse */
MfApp1Service.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MfApp1Service.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWYtYXBwMS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWYtYXBwMS8iLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9tZi1hcHAxLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBS2xELE1BQU0sT0FBTyxhQUFhOzs7O0lBQ3hCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzs7O0lBRXhDLE9BQU87UUFDTCxPQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBQyxFQUFFLFlBQVksRUFBRSxtQkFBQSxXQUFXLEVBQVUsRUFBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7O1lBTkYsVUFBVTs7OztZQUpGLFVBQVU7Ozs7Ozs7SUFNTCw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZkFwcDFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldEh0bWwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gIHRoaXMuaHR0cC5nZXQoJy9sb2FkJyx7IHJlc3BvbnNlVHlwZTogJ3RleHQvaHRtbCcgYXMgJ3RleHQnfSk7XG4gIH1cblxufVxuIl19