import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()
export class MfApp1Service {
  constructor(private http: HttpClient) {}

  getHtml(): Observable<any> {
    return  this.http.get('/load',{ responseType: 'text/html' as 'text'});
  }

}
