import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    MenuBarComponent
  ]
})
export class SharedModule { }
