import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeadComponent } from './head/head.component';
import { OurServicesComponent } from './our-services/our-services.component';


const partials = [MenuComponent, HeadComponent, OurServicesComponent]

@NgModule({
  declarations: partials,
  imports: [
    CommonModule
  ],
  exports:partials
})
export class PartialsModule { }
