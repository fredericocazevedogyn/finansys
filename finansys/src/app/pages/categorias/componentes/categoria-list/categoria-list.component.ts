import { Categoria } from './../../shared/Categoria.model';
import { CategoriaService } from './../../shared/categoria.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(): void {
    this.categoriaService.getAll().subscribe (
      categorias => this.categorias = categorias,
      error => alert("Erro ao carregar a lista")
    )
  }

  delete(categoria: any) {
    const mustDelete = confirm("Deseja realmente excluir esse item?");
    if(mustDelete) {
      this.categoriaService.delete(categoria.id).subscribe (
        () => this.categorias = this.categorias.filter(element => element != categoria),
        () => alert("Erro ao tentar excluir!")
      )
    }
  }
}


