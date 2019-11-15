import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliotecaRoutingModule } from './biblioteca-routing.module';
import { EditorialComponent } from './editorial/editorial.component';
import { TiposComponent } from './tipos/tipos.component';
import { AreasComponent } from './areas/areas.component';
import { LibrosComponent } from './libros/libros.component';
import { ExistenciaComponent } from './existencia/existencia.component';
import { BibliotecaComponent } from './biblioteca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoresModule } from './autores/autores.module';
import { AreasFormComponent } from './areas/areas-form/areas-form.component';
import { AreasTableComponent } from './areas/areas-table/areas-table.component';
import { AreasModule } from './areas/areas.module';



@NgModule({
  declarations: [BibliotecaComponent,EditorialComponent,TiposComponent,
    LibrosComponent,ExistenciaComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutoresModule,
    AreasModule
  ]
})
export class BibliotecaModule { }
