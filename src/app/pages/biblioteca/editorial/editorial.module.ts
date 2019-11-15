import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialRoutingModule } from './editorial-routing.module';
import { EditorialComponent } from './editorial.component';
import { EditorialFormComponent } from './editorial-form/editorial-form.component';
import { EditorialTableComponent } from './editorial-table/editorial-table.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms'

@NgModule({
  declarations: [EditorialComponent,EditorialFormComponent,EditorialTableComponent],
  imports: [
    CommonModule,
    EditorialRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class EditorialModule { }
