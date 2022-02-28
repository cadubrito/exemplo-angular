import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { InfoComponent } from './info/info.component';
import { SharedModule } from '../my-components/shared/shared.module';
//Service
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports:[
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    InfoComponent
  ]
})
export class PagesModule { }
