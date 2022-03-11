import { Projeto } from './../../../models/projetoModel';
import { ProjetoService } from './../../../servicos/projeto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-projeto',
  templateUrl: './lista-projeto.component.html',
  styleUrls: ['./lista-projeto.component.css']
})
export class ListaProjetoComponent implements OnInit {

  modal: boolean = false

  id_projeto: any

  projetos: any = []

  constructor(private projetoService: ProjetoService) { }

  ngOnInit(): void {
    this.listaProjetos()
  }


  // projeto.id_projeto, projeto.proj_nome, projeto.proj_filial, funcionario.func_nome, funcionario.func_cidade
  listaProjetos() {
    this.projetoService.projetoComSeuLider().subscribe((res) => {
      res.forEach((projeto: any[]) => {
        let projetoComLider: any = {
          id_projeto: '',
          proj_nome: '',
          proj_filial: '',
          func_nome: '',
          func_cidade: ''
        }
        projetoComLider.id_projeto = projeto[0]
        projetoComLider.proj_nome = projeto[1]
        projetoComLider.proj_filial = projeto[2]
        if (projeto[3] != null) {
          projetoComLider.func_nome = projeto[3]
          projetoComLider.func_cidade = projeto[4]
        } else {
          projetoComLider.func_nome = "----"
          projetoComLider.func_cidade = "----"
        }

        this.projetos.push(projetoComLider)

      })
    })
  }

  abrirModal(id_projeto: any) {
    this.modal = true
    this.id_projeto = id_projeto
  }

  fecharModal() {
    this.modal = false
  }

  deletarCargo() {
    this.projetoService.deletarProjeto(this.id_projeto).subscribe({
      next: () => this.modal = false,
      error: erro => console.log(erro),
      complete: () => this.listaProjetos()
    })
  }

}
