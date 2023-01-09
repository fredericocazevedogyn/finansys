import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './componentes/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './componentes/categoria-list/categoria-list.component';

const routes: Routes = [
  { path: '', component: CategoriaListComponent },
  { path: 'new', component: CategoriaFormComponent },
  { path: ':id/edit', component: CategoriaFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
