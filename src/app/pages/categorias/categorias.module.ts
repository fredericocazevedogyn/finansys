import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaListComponent } from './componentes/categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './componentes/categoria-form/categoria-form.component';


@NgModule({
  declarations: [
    CategoriaListComponent,
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-rigth',
      preventDuplicates: true,
      maxOpened: 1,
      progressBar: true,
      progressAnimation: 'decreasing',

    }),
  ]
})
export class CategoriasModule { }
