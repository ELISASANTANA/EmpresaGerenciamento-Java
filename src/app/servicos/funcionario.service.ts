import { Funcionario } from './../models/funcionarioModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  baseUrl: string = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) { }

  findAllWorkers(): Observable<Funcionario[]> {
    const url = `${this.baseUrl}/funcionario`
    return this.http.get<Funcionario[]>(url)
  }

  listWorkerJob(id_cargo: string): Observable<Funcionario[]> {
    const url = `${this.baseUrl}/funcionario/busca-cargo/${id_cargo}`
    return this.http.get<Funcionario[]>(url)
  }

  listWorkerAndJob(): Observable<any> {
    // /funcionario-cargo
    const url = `${this.baseUrl}/funcionario-cargo`
    return this.http.get<any>(url)
  }

  addWorker(funcionario: Funcionario, id_cargo: string): Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionario?cargo=${id_cargo}`
    return this.http.post<Funcionario>(url, funcionario)
  }

  addWorkerSemCargo(funcionario: Funcionario) {
    const url = `${this.baseUrl}/funcionario-sem-cargo`
    return this.http.post<Funcionario>(url, funcionario)
  }

  oneWorker(id_funcionario: string): Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.get<Funcionario>(url)
  }

  excluirFuncionario(id_funcionario: string): Observable<void> {
    const url = `${this.baseUrl}/funcionario/${id_funcionario}`
    return this.http.delete<void>(url)
  }

  editWorker(funcionario: Funcionario, id_funcionario: String, id_cargo: String): Observable<Funcionario> {
    // /funcionario/
    const url = `${this.baseUrl}/funcionario/troca-cargo/${id_funcionario}?cargo=${id_cargo}`
    return this.http.put<Funcionario>(url, funcionario)
  }

  buscarLiderDoProjeto(id_projeto: String): Observable<Funcionario> {
    // funcionario/lider-projeto/{id_projeto}
    const url = `${this.baseUrl}/funcionario/lider-projeto/${id_projeto}`
    return this.http.get<Funcionario>(url)
  }

  buscaFuncSemProjeto(): Observable<Funcionario[]> {
    // /funcionario-sem-projeto
    const url = `${this.baseUrl}/funcionario-sem-projeto`
    return this.http.get<Funcionario[]>(url)
  }

  funcComSeuProjeto(): Observable<any> {
    // /funcionario/funcionario-projeto
    const url = `${this.baseUrl}/funcionario/funcionario-projeto`
    return this.http.get<any>(url)
  }

  atribuirProjFunc(funcionario: Funcionario, id_funcionario: String, id_projeto: String): Observable<void> {
    // /funcionario/definir-projeto/{id_funcionario}/{id_projeto}
    const url = `${this.baseUrl}/funcionario/definir-projeto/${id_funcionario}/${id_projeto}`
    return this.http.put<void>(url, funcionario)
  }

  buscarFuncionarioPeloNome(func_nome: String): Observable<Funcionario> {
    const url = `${this.baseUrl}/funcionario-nome/${func_nome}`
    return this.http.get<Funcionario>(url)
  }
}
