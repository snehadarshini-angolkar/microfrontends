/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
export { MfApp1Service };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MfApp1Service.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWYtYXBwMS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWYtYXBwMS8iLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9tZi1hcHAxLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSWxEO0lBRUUsdUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzs7O0lBRXhDLCtCQUFPOzs7SUFBUDtRQUNFLE9BQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLEVBQUUsWUFBWSxFQUFFLG1CQUFBLFdBQVcsRUFBVSxFQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkFORixVQUFVOzs7O2dCQUpGLFVBQVU7O0lBWW5CLG9CQUFDO0NBQUEsQUFSRCxJQVFDO1NBUFksYUFBYTs7Ozs7O0lBQ1osNkJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWZBcHAxU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXRIdG1sKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuICB0aGlzLmh0dHAuZ2V0KCcvbG9hZCcseyByZXNwb25zZVR5cGU6ICd0ZXh0L2h0bWwnIGFzICd0ZXh0J30pO1xuICB9XG5cbn1cbiJdfQ==