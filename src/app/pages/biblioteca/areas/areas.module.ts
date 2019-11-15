import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';
import { AreasFormComponent } from './areas-form/areas-form.component';
import { AreasTableComponent } from './areas-table/areas-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AreasComponent,AreasFormComponent,AreasTableComponent],
  imports: [
    CommonModule,
    AreasRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class AreasModule { }
