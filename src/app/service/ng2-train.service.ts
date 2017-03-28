import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Ng2TrainService {

  constructor(private http: Http) { }

  getInnerHtml(): Observable<any> {

    let headers = new Headers({ 'Accept': 'application/json' });
    let params: URLSearchParams = new URLSearchParams();
    let requestOptions = new RequestOptions();
    requestOptions.headers = headers;
    requestOptions.search = params;

    return this.http.get('/api/v1/innerHtml/1', requestOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    return res.json().data || {};
  }

  private handleError(error: Response | any) {
    var errMsg: string;
    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error("ERROR!" + errMsg);
    return Observable.throw(errMsg);
  }

}
