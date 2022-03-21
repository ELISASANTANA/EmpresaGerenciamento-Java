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

  funcionarios: any = []

  id_funcionario: any

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_foto: ''
  }

  funcionarioCargo: Funcionario[] = []

  modal: boolean = false

  constructor(private funcionarioService: FuncionarioService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.listAllWorkers()
  }


  listAllWorkers() {
    this.funcionarioService.findAllWorkers().subscribe(res => {
      this.funcionarios = res
      console.log(res)
    })
  }

  deletarFuncionario() {
    this.funcionarioService.excluirFuncionario(this.id_funcionario).subscribe({
      next: () => console.log("Funcionário excluído!"),
      error: erro => alert("Erro, ao excluir funcionario"),
      complete: () => {
        this.listAllWorkers()
        this.modal = false
      }
    })
  }

  abrirModal(id_funcionario: any) {
    this.modal = true
    this.id_funcionario = id_funcionario
  }

  fecharModal() {
    this.modal = false
  }

}
