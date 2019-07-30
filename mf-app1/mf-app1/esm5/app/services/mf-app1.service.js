/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
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
        //return  this.http.get('/load',{ responseType: 'text/html' as 'text'});
        return of({});
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
export { MfApp1Service };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MfApp1Service.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWYtYXBwMS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWYtYXBwMS8iLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9tZi1hcHAxLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHdEM7SUFFRSx1QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7Ozs7SUFFeEMsK0JBQU87OztJQUFQO1FBQ0Usd0VBQXdFO1FBQ3hFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7O2dCQVBGLFVBQVU7Ozs7Z0JBSkYsVUFBVTs7SUFhbkIsb0JBQUM7Q0FBQSxBQVRELElBU0M7U0FSWSxhQUFhOzs7Ozs7SUFDWiw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWZBcHAxU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXRIdG1sKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgLy9yZXR1cm4gIHRoaXMuaHR0cC5nZXQoJy9sb2FkJyx7IHJlc3BvbnNlVHlwZTogJ3RleHQvaHRtbCcgYXMgJ3RleHQnfSk7XG4gICAgcmV0dXJuIG9mKHt9KTtcbiAgfVxuXG59XG4iXX0=