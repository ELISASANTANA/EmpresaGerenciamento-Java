import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCurrencyModule } from "ngx-currency";

import localePt from '@angular/common/locales/pt';
import { CurrencyPipe, registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/templates/home/home.component';
import { CadastroCargoComponent } from './componentes/cargo/cadastro-cargo/cadastro-cargo.component';
import { ListaCargosComponent } from './componentes/cargo/lista-cargos/lista-cargos.component';
import { HeaderComponent } from './componentes/templates/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ExclusaoCargoComponent } from './componentes/cargo/exclusao-cargo/exclusao-cargo.component';
import { FormsModule } from '@angular/forms';
import { EdicaoCargoComponent } from './componentes/cargo/edicao-cargo/edicao-cargo.component';
import { ListaFuncionariosComponent } from './componentes/funcionario/lista-funcionarios-cargo/lista-funcionarios.component';
import { CadastroFuncionarioComponent } from './componentes/funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { ExclusaoFuncionarioComponent } from './componentes/funcionario/exclusao-funcionario/exclusao-funcionario.component';
import { ListaFuncComponent } from './componentes/funcionario/lista-func-cargo/lista-func.component';
import { EdicaoFuncionarioComponent } from './componentes/funcionario/edicao-funcionario/edicao-funcionario.component';
import { ListaProjetoComponent } from './componentes/projeto/lista-projeto/lista-projeto.component';
import { ProjetoLiderComponent } from './componentes/projeto/projeto-lider/projeto-lider.component';
import { ListaFuncProjetoComponent } from './componentes/funcionario/lista-func-projeto/lista-func-projeto.component';
import { AtribuirProjetoComponent } from './componentes/funcionario/atribuir-projeto/atribuir-projeto.component';
import { ListaFuncionariosGeralComponent } from './componentes/funcionario/lista-funcionarios-geral/lista-funcionarios-geral.component';
import { CadastrarFuncionarioSemCargoComponent } from './componentes/funcionario/cadastrar-funcionario-sem-cargo/cadastrar-funcionario-sem-cargo.component';
import { PagamentoComponent } from './componentes/salario/pagamento/pagamento.component';
import { CadastrarSalarioComponent } from './componentes/salario/cadastrar-salario/cadastrar-salario.component';
import { EdicaoSalarioComponent } from './componentes/salario/edicao-salario/edicao-salario.component';
import { LoginComponent } from './componentes/templates/login/login.component';
import { AtribuirFotoComponent } from './componentes/funcionario/atribuir-foto/atribuir-foto.component';
import { CadastroProjetoComponent } from './componentes/projeto/cadastro-projeto/cadastro-projeto.component';
import { EdicaoProjetoComponent } from './componentes/projeto/edicao-projeto/edicao-projeto.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroCargoComponent,
    ListaCargosComponent,
    HeaderComponent,
    ExclusaoCargoComponent,
    EdicaoCargoComponent,
    ListaFuncionariosComponent,
    CadastroFuncionarioComponent,
    ExclusaoFuncionarioComponent,
    ListaFuncComponent,
    EdicaoFuncionarioComponent,
    ListaProjetoComponent,
    ProjetoLiderComponent,
    ListaFuncProjetoComponent,
    AtribuirProjetoComponent,
    ListaFuncionariosGeralComponent,
    CadastroFuncionarioComponent,
    CadastrarFuncionarioSemCargoComponent,
    PagamentoComponent,
    CadastrarSalarioComponent,
    EdicaoSalarioComponent,
    LoginComponent,
    AtribuirFotoComponent,
    CadastroProjetoComponent,
    EdicaoProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxCurrencyModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' },
  { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
