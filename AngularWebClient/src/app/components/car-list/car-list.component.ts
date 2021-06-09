import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getAll().subscribe(
      data => {
        this.cars = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  delete(id: number) {
    alert('deleted ' + id);
  }
}