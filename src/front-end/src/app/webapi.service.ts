import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
readonly APIBaseUrl="https://localhost:7288/api";

  constructor(private http:HttpClient) { }

  getWeatherForecast():Observable<any[]>{
    return this.http.get<any>(this.APIBaseUrl+'GetWeatherForecast');
  }
}
