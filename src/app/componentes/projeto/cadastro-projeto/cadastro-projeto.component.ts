import { Location } from '@angular/common';
import { ProjetoService } from './../../../servicos/projeto.service';
import { Projeto } from './../../../models/projetoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css']
})
export class CadastroProjetoComponent implements OnInit {

  projeto: Projeto = {
    id_projeto: '',
    proj_nome: '',
    proj_filial: ''
  }

  constructor(private projetoService: ProjetoService,
    private location: Location) { }

  ngOnInit(): void {
  }

  cadastarProjeto() {
    this.projetoService.cadastrarProjeto(this.projeto).subscribe({
      next: () => {
        alert("Novo projeto adicionado!")
      },
      error: erro => {
        alert("Erro ao cadastrar novo projeto")
      },
      complete: () => {
        console.info('Complete')
        this.location.back()
      }
    })
  }

}
