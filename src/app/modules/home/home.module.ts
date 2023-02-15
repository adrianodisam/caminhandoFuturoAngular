import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BigCardComponent } from 'src/app/features/big-card/big-card.component';
import { UnitCardComponent } from 'src/app/features/unit-card/unit-card.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BigCardComponent,
    UnitCardComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
