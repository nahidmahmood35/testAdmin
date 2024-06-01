import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageOneComponent} from './page-one/page-one.component';
import {PagetwoComponent} from './pagetwo/pagetwo.component';
import { DeshboardComponent } from './deshboard/deshboard.component';


const routes: Routes = [
  {
    path: '',
    component: DeshboardComponent,
  },
  {
    path: 'Dashboard',
    component: DeshboardComponent,
  },
  {
    path: 'one',
    component: PageOneComponent,
  },
  {
    path: 'two',
    component: PagetwoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
