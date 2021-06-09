import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

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
        this.comeback();
      }
    );
  }

  comeback(): void {
    this.router.navigate(['/']);
  }
}