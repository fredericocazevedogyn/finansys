import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaListComponent } from './componentes/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './componentes/categoria-form/categoria-form.component';
import { TesteComponent } from './teste/teste.component';


@NgModule({
  declarations: [
    CategoriaListComponent,
    CategoriaFormComponent,
    TesteComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
