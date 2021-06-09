import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCreateComponent } from './components/car-create/car-create.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarListComponent } from './components/car-list/car-list.component';

const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'detail/:id', component: CarDetailComponent },
  { path: 'create', component: CarCreateComponent },
  { path: 'edit/:id', component: CarEditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
