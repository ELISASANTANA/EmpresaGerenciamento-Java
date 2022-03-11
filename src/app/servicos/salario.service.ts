import { HttpClient } from '@angular/common/http';
import { Salario } from './../models/salarioModel';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalarioService {

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) { }

  // funcionario/salario
  listarTodosSalarios(): Observable<Salario[]> {
    const url = `${this.baseUrl}/funcionario/salario`
    return this.http.get<Salario[]>(url)
  }

  // /funcionario/salario/{codigo}
  buscarUmSalario(codigo: String): Observable<Salario> {
    const url = `${this.baseUrl}/funcionario/salario/${codigo}`
    return this.http.get<Salario>(url)
  }

  //  /funcionario/salario-funcionario/{id_funcionario}
  salariosDoFuncionario(id_funcionario: String): Observable<Salario[]> {
    const url = `${this.baseUrl}/funcionario/salario-funcionario/${id_funcionario}`
    return this.http.get<Salario[]>(url)
  }

  inserirPagamento(salario: Salario, id_funcionario: String): Observable<Salario> {
    // /funcionario/salario/{id_funcionario}
    const url = `${this.baseUrl}/funcionario/salario/${id_funcionario}`
    return this.http.post<Salario>(url, salario)
  }

  editarSalario(salario: Salario, codigo: String, id_funcionario: String): Observable<Salario> {
    const url = `${this.baseUrl}/funcionario/salario/${codigo}/${id_funcionario}`
    return this.http.put<Salario>(url, salario)
  }

  pagarSalario(salario: Salario, codigo: String): Observable<Salario> {
    const url = `${this.baseUrl}/funcionario/pagar-salario/${codigo}`
    return this.http.put<Salario>(url, salario)
  }

  cancelarSalario(salario: Salario, codigo: String): Observable<Salario> {
    // /funcionario/cancelar-salario/{codigo}
    const url = `${this.baseUrl}/funcionario/cancelar-salario/${codigo}`
    return this.http.put<Salario>(url, salario)
  }

  deletarSalario(codigo: String): Observable<void> {
    const url = `${this.baseUrl}/funcionario/excluir-salario/${codigo}`
    return this.http.delete<void>(url)
  }
}
