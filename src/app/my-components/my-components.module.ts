import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ImgsComponent } from './imgs/imgs.component';
import { CardsComponent } from './cards/cards.component';
import { AnimationsComponent } from './animations/animations.component';



@NgModule({
  declarations: [
    ImgsComponent,
    CardsComponent,
    AnimationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImgsComponent,
    CardsComponent,
    AnimationsComponent
  ]
})
export class MyComponentsModule { }
