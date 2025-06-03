import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://backend-9den.onrender.com'

@Injectable({
  providedIn: 'root'
})
export class GpsService {
  constructor(private readonly _http: HttpClient) { }


  getLocation(): Observable<any> {
    return this._http.get(`${API_URL}/api/sensores`);
  }
}
