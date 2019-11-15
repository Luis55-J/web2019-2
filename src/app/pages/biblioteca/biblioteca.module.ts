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
import { AreasModule } from './areas/areas.module';
import { EditorialModule } from './editorial/editorial.module';



@NgModule({
  declarations: [BibliotecaComponent,TiposComponent,
    LibrosComponent,ExistenciaComponent],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutoresModule,
    AreasModule,
    EditorialModule
    
  ]
})
export class BibliotecaModule { }
