import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url: string = 'http://localhost:8080/car/';

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.url);
  }

  public getOne(id: number): Observable<Car> {
    return this.httpClient.get<Car>(this.url + id);
  }

  public save(car: Car): Observable<any> {
    return this.httpClient.post<any>(this.url, car);
  }
}