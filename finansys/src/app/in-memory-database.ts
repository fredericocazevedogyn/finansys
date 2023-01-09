import { InMemoryDbService } from "angular-in-memory-web-api";
import { } from "./pages/categorias/shared/Categoria.model";

export class InMemoryDatabase implements InMemoryDbService{

  createDb(){
    const categorias = [
      { id: 1, name: 'Moradia', descricao: "Pagamentos de Contas da Casa" },
      { id: 2, name: 'Saúde', descricao: "Plano de Saúde e Remédios" },
      { id: 3, name: 'Lazer', descricao: "Cinema, parques, praia, etc" },
      { id: 4, name: 'Salário', descricao: "Recebimento de salário" },
      { id: 5, name: 'Freelas', descricao: "Trabalhos com freelancer" },
    ];
    return {categorias}
  }

}
