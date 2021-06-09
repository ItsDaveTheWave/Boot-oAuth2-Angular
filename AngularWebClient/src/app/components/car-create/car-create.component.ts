import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  constructor(
    private carService: CarService,
    private toastr: ToastrService,
    private router: Router) { }

  brand: string = '';
  model: string = '';
  price: number | null = null;

  ngOnInit(): void {
  }

  onCreate(): void {
    const car = new Car(this.brand, this.model, this.price!);
    this.carService.create(car).subscribe(
      data => {
        this.toastr.success('Car created', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-bottom-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.subErrors[0].field + ' ' + err.error.subErrors[0].message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-bottom-center'
        });
        this.router.navigate(['/']);
      }
    );
  }
}