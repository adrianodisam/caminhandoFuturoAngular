import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateComponent } from './modules/donate/donate.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Caminhando para o Futuro"
  },
  {
    path: "doe",
    component: DonateComponent,
    title: "Doações"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
