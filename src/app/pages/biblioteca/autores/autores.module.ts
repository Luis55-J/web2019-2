import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { AutoresComponent } from './autores.component';
import { AutorFormComponent } from './autor-form/autor-form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutorTableComponent } from './autor-table/autor-table.component';


@NgModule({
  declarations: [AutoresComponent,AutorFormComponent,AutorTableComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AutoresModule { }
