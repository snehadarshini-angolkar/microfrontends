import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
export declare class MfApp1Service {
    private http;
    constructor(http: HttpClient);
    getHtml(): Observable<any>;
}
