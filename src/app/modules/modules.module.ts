import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';


import { ButtonModule } from 'primeng/button';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    LayoutComponent, HomeComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule, ButtonModule
  ]
})
export class ModulesModule { }
