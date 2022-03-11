import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projeto } from '../models/projetoModel';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  baseUrl: string = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) { }

  listaProjetos(): Observable<Projeto[]> {
    const url = `${this.baseUrl}/projeto`
    return this.http.get<Projeto[]>(url)
  }

  atribuirLiderProjeto(projeto: Projeto, id_projeto: String, id_funcionario: String): Observable<void> {
    // projeto/definir-lider/{id_projeto}/{id_funcionario}
    const url = `${this.baseUrl}/projeto/definir-lider/${id_projeto}/${id_funcionario}`
    return this.http.put<void>(url, projeto)
  }

  buscaUmProjeto(id_projeto: String): Observable<Projeto> {
    // projeto/{id_projeto}
    const url = `${this.baseUrl}/projeto/${id_projeto}`
    return this.http.get<Projeto>(url)
  }

  deixarProjetoSemLider(projeto: Projeto, id_projeto: String, id_funcionario: String): Observable<void> {
    // projeto/remover-lider/{id_projeto}/{id_funcionario}
    const url = `${this.baseUrl}/projeto/remover-lider/${id_projeto}/${id_funcionario}`
    return this.http.put<void>(url, projeto)
  }

  buscarProjSemLider(): Observable<Projeto[]> {
    // projeto-sem-lider
    const url = `${this.baseUrl}/projeto-sem-lider`
    return this.http.get<Projeto[]>(url)
  }

  buscarProjetoFunc(id_funcionario: String) {
    // funcionario/projeto-lider/{id_funcionario}
    const url = `${this.baseUrl}/funcionario/projeto-lider/${id_funcionario}`
    return this.http.get<Projeto>(url)
  }

  projetoComSeuLider(): Observable<any> {
    const url = `${this.baseUrl}/projeto/projeto-e-lider`
    return this.http.get<any>(url)
  }

  cadastrarProjeto(projeto: Projeto): Observable<Projeto> {
    const url = `${this.baseUrl}/adicionar-projeto`
    return this.http.post<Projeto>(url, projeto)
  }

  editarProjeto(projeto: Projeto): Observable<Projeto> {
    const url = `${this.baseUrl}/editar-projeto/${projeto.id_projeto}`
    return this.http.put<Projeto>(url, projeto)
  }

  deletarProjeto(id_projeto: String): Observable<void> {
    const url = `${this.baseUrl}/projeto/${id_projeto}`
    return this.http.delete<void>(url)
  }

}
