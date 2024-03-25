import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';


import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { QAndAComponent } from './components/q-and-a/q-and-a.component';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent, HomeComponent, QAndAComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule, ButtonModule, AccordionModule, CardModule, FormsModule
  ]
})
export class ModulesModule { }
