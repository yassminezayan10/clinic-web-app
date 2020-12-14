import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient:HttpClient) { }
  baseUrl ='https://api.covid19api.com/summary';
  getData():Observable<any>{
    return this._httpClient.get(this.baseUrl);
 }
}

