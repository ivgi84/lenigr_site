import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeadComponent } from './head/head.component';


const partials = [MenuComponent, HeadComponent]

@NgModule({
  declarations: partials,
  imports: [
    CommonModule
  ],
  exports:partials
})
export class PartialsModule { }
