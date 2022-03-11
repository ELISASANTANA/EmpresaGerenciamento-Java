import { Router } from '@angular/router';
import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Funcionario } from '../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-func',
  templateUrl: './lista-func.component.html',
  styleUrls: ['./lista-func.component.css']
})
export class ListaFuncComponent implements OnInit {

  funcionarios: any = []

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    this.listAllWorkers()
  }

  listAllWorkers() {
    this.funcionarioService.listWorkerAndJob().subscribe((res) => {
      res.forEach((funcionario: any[]) => {
        let funcComCargo: any = {
          id_funcionario: funcionario[0],
          func_nome: funcionario[1],
          func_cidade: funcionario[2],
          cargo_nome: funcionario[3],
          cargo_atribuicao: funcionario[4]
        }
        this.funcionarios.push(funcComCargo)
      })
    })
  }

}
