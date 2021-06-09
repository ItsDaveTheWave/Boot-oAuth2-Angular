import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  car: Car | null = null;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.carService.getOne(id).subscribe(
      data => {
        this.car = data;
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

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.carService.edit(id, this.car!).subscribe(
      data => {
        this.toastr.success('Car updated', 'OK', {
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