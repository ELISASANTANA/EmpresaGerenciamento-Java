import { CadastroProjetoComponent } from './componentes/projeto/cadastro-projeto/cadastro-projeto.component';
import { AtribuirFotoComponent } from './componentes/funcionario/atribuir-foto/atribuir-foto.component';
import { PagamentoComponent } from './componentes/salario/pagamento/pagamento.component';
import { CadastrarFuncionarioSemCargoComponent } from './componentes/funcionario/cadastrar-funcionario-sem-cargo/cadastrar-funcionario-sem-cargo.component';
import { ListaFuncionariosGeralComponent } from './componentes/funcionario/lista-funcionarios-geral/lista-funcionarios-geral.component';
import { AtribuirProjetoComponent } from './componentes/funcionario/atribuir-projeto/atribuir-projeto.component';
import { ProjetoLiderComponent } from './componentes/projeto/projeto-lider/projeto-lider.component';
import { ListaProjetoComponent } from './componentes/projeto/lista-projeto/lista-projeto.component';
import { EdicaoFuncionarioComponent } from './componentes/funcionario/edicao-funcionario/edicao-funcionario.component';
import { ListaFuncComponent } from './componentes/funcionario/lista-func-cargo/lista-func.component';
import { CadastroFuncionarioComponent } from './componentes/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ListaFuncionariosComponent } from './componentes/funcionario/lista-funcionarios-cargo/lista-funcionarios.component';
import { ExclusaoCargoComponent } from './componentes/cargo/exclusao-cargo/exclusao-cargo.component';
import { ListaCargosComponent } from './componentes/cargo/lista-cargos/lista-cargos.component';
import { CadastroCargoComponent } from './componentes/cargo/cadastro-cargo/cadastro-cargo.component';
import { HomeComponent } from './componentes/templates/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicaoCargoComponent } from './componentes/cargo/edicao-cargo/edicao-cargo.component';
import { ExclusaoFuncionarioComponent } from './componentes/funcionario/exclusao-funcionario/exclusao-funcionario.component';
import { ListaFuncProjetoComponent } from './componentes/funcionario/lista-func-projeto/lista-func-projeto.component';
import { CadastrarSalarioComponent } from './componentes/salario/cadastrar-salario/cadastrar-salario.component';
import { EdicaoSalarioComponent } from './componentes/salario/edicao-salario/edicao-salario.component';
import { LoginComponent } from './componentes/templates/login/login.component';
import { EdicaoProjetoComponent } from './componentes/projeto/edicao-projeto/edicao-projeto.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "cargos", component: ListaCargosComponent },
  { path: "funcionarios-cargo", component: ListaFuncComponent },
  { path: "cadastro-cargo", component: CadastroCargoComponent },
  { path: "excluir-cargo/:id", component: ExclusaoCargoComponent },
  { path: "editar-cargo/:id", component: EdicaoCargoComponent },
  { path: "funcionario-cargo/:id_cargo", component: ListaFuncionariosComponent },
  { path: "cadastro-funcionario/:id_cargo", component: CadastroFuncionarioComponent },
  { path: "exclusao-funcionario/:id_funcionario/:id_cargo", component: ExclusaoFuncionarioComponent },
  { path: "editar-funcionario/:id_funcionario/:id_cargo", component: EdicaoFuncionarioComponent },
  { path: "projetos", component: ListaProjetoComponent },
  { path: "projeto-lider/:id_projeto", component: ProjetoLiderComponent },
  { path: "projeto/cadastro", component: CadastroProjetoComponent },
  { path: "funcionario-projeto", component: ListaFuncProjetoComponent },
  { path: "projeto-funcionario/:id_funcionario", component: AtribuirProjetoComponent },
  { path: "projeto/editar/:id_projeto", component: EdicaoProjetoComponent },
  { path: "lista-funcionarios", component: ListaFuncionariosGeralComponent },
  { path: "cadastrar-funcionario", component: CadastrarFuncionarioSemCargoComponent },
  { path: "salario-funcionario/:id_funcionario", component: PagamentoComponent },
  { path: "funcionario/cadastro-salario/:id_funcionario", component: CadastrarSalarioComponent },
  { path: "funcionario/editar-salario/:codigo/:id_funcionario", component: EdicaoSalarioComponent },
  { path: "funcionario/atribuir-foto/:id_funcionario", component: AtribuirFotoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
