/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
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
        //return  this.http.get('/load',{ responseType: 'text/html' as 'text'});
        return of({});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWYtYXBwMS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWYtYXBwMS8iLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9tZi1hcHAxLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdEMsTUFBTSxPQUFPLGFBQWE7Ozs7SUFDeEIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7Ozs7SUFFeEMsT0FBTztRQUNMLHdFQUF3RTtRQUN4RSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7WUFQRixVQUFVOzs7O1lBSkYsVUFBVTs7Ozs7OztJQU1MLDZCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tIFwicnhqc1wiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZkFwcDFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldEh0bWwoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvL3JldHVybiAgdGhpcy5odHRwLmdldCgnL2xvYWQnLHsgcmVzcG9uc2VUeXBlOiAndGV4dC9odG1sJyBhcyAndGV4dCd9KTtcbiAgICByZXR1cm4gb2Yoe30pO1xuICB9XG5cbn1cbiJdfQ==