import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  areaData(): Observable<Object> {
    return this.http.get('http://localhost:8000/get-areaData');
  }

  yearsData(): Observable<Object> {
    return this.http.get('http://localhost:8000/get-yearData');
  }

  areas(): Observable<Object> {
    return this.http.get('http://localhost:8000/get-areas');
  }

  predict(data: Object): Observable<Object> {
    return this.http.post('http://localhost:8000/predict', data);
  }
}
