import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(
    private carService: CarService,
    private toastr: ToastrService) { }

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
    this.carService.delete(id).subscribe(
      data => {
        this.toastr.success('Car deleted', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-bottom-center'
        });
        this.loadCars();
      },
      err => {
        this.toastr.error(err.error, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-bottom-center'
        });
      }
    );
  }
}