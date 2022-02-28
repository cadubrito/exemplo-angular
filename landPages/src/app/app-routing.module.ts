import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path:"",component: HomeComponent,pathMatch:"full"},
  {path:"contact",component: ContactComponent},
  {path:"services",component: ServicesComponent},
  {path:"info",component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
