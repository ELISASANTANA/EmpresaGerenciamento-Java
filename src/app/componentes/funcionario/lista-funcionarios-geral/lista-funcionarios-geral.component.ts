import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FuncionarioService } from './../../../servicos/funcionario.service';
import { Funcionario } from './../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-funcionarios-geral',
  templateUrl: './lista-funcionarios-geral.component.html',
  styleUrls: ['./lista-funcionarios-geral.component.css']
})
export class ListaFuncionariosGeralComponent implements OnInit {

  funcionarios: Funcionario[] = []

  id_funcionario: any

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_foto: ''
  }

  constructor(private funcionarioService: FuncionarioService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.listAllWorkers()
  }


  listAllWorkers() {
    this.funcionarioService.findAllWorkers().subscribe(res => {
      this.funcionarios = res
    })
  }

  deletarFuncionario(id_funcionario: any) {
    this.funcionarioService.excluirFuncionario(id_funcionario).subscribe({
      next: () => alert("Funcionário excluído!"),
      error: erro => alert("Erro, ao excluir funcionario"),
      complete: () => this.listAllWorkers()
    })
  }

}
