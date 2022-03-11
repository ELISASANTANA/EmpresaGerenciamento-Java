import { Router } from '@angular/router';
import { FuncionarioService } from './../../../servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-func-projeto',
  templateUrl: './lista-func-projeto.component.html',
  styleUrls: ['./lista-func-projeto.component.css']
})
export class ListaFuncProjetoComponent implements OnInit {

  funcionarios: any = []

  constructor(private funcionarioService: FuncionarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.buscarTodosFuncionarios()
  }

  // funcionario.id_funcionario, funcionario.func_nome, funcionario.func_cidade, projeto.id_projeto, projeto.proj_nome ,projeto.proj_filial
  buscarTodosFuncionarios() {
    this.funcionarioService.funcComSeuProjeto().subscribe((res) => {
      res.forEach((funcionario: any[]) => {

        let funcComProjeto: any = {
          id_funcionario: '',
          func_nome: '',
          func_cidade: '',
          id_projeto: '',
          proj_nome: '',
          proj_filial: ''
        }

        funcComProjeto.id_funcionario = funcionario[0]
        funcComProjeto.func_nome = funcionario[1]
        funcComProjeto.func_cidade = funcionario[2]
        if (funcionario[4] != null) {
          funcComProjeto.id_projeto = funcionario[3]
          funcComProjeto.proj_nome = funcionario[4]
          funcComProjeto.proj_filial = funcionario[5]
        } else {
          funcComProjeto.id_projeto = funcionario[3]
          funcComProjeto.proj_nome = "----"
          funcComProjeto.proj_filial = "----"
        }
        this.funcionarios.push(funcComProjeto)
      })
    })
  }

}
