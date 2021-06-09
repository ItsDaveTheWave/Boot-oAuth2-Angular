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

  public create(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(this.url, car);
  }

  public edit(id: number, car: Car): Observable<Car> {
    return this.httpClient.put<Car>(this.url + id, car);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + id);
  }
}