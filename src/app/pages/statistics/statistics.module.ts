import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './statistics.component';


const routes: Routes = [{
  path: '',
  component: StatisticsComponent
}];

@NgModule({
  declarations: [StatisticsComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class StatisticsModule { }
