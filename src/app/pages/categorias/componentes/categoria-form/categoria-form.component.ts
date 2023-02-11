import { Categoria } from './../../shared/Categoria.model';
import { CategoriaService } from './../../shared/categoria.service';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoriaForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildCategoriaForm();
    this.loadCategoria();
  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }

  submitForm() {

    this.submittingForm = true;

    if(this.currentAction = "new"){
      this.createCategoria();
    } else {
      this.updateCategoria();
    }

  }

  //Metodos privados
  private setCurrentAction() {
    if(this.route.snapshot.url[0].path == 'new')
      this.currentAction = 'new'
    else
      this.currentAction = 'edit'
  }

  private buildCategoriaForm() {
    this.categoriaForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      descricao: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(254)]]
    })
  }

  private loadCategoria() {
    if(this.currentAction == 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.categoriaService.getById(+params.get('id')))
      ).subscribe(
        (categoria) => {
          this.categoria = categoria
          this.categoriaForm.patchValue(categoria)
        },
        (error) => alert("Ocorreu um erro no Servidor, tente mais tarde!")
      )
    }
  }

  private setPageTitle() {
    if(this.currentAction = "new") {
      this.pageTitle = "Cadastro de Nova Categoria";
    } else {
      const nomeCategoria = this.categoria.nome || ""
      this.pageTitle = "Editando Categoria: " + nomeCategoria;
    }
  }

  private createCategoria(){
    const category: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);
    this.categoriaService.create(category).subscribe(
      category => this.toastr.success("Categoria cadastrada com sucesso!"),
      error => this.toastr.error(error)
    )
  }

  private updateCategoria(){

  }

  private actionsForSuccess(){
    this.toastr.success("Categoria cadastrada com sucesso!");
  }

  private actionsForError(error){
    //toastr.error("Ocorreu um erro ao cadastrar uma categoria");

    this.submittingForm = false;

    if(error.status === 422){
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ["Falha na comunicação com o servidor, favor entrar em contato com administrador!"]
    }
  }
}
