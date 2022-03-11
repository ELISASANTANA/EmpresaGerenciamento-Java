import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from './../../../servicos/projeto.service';
import { Projeto } from './../../../models/projetoModel';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edicao-projeto',
  templateUrl: './edicao-projeto.component.html',
  styleUrls: ['./edicao-projeto.component.css']
})
export class EdicaoProjetoComponent implements OnInit {

  projeto: Projeto = {
    id_projeto: '',
    proj_nome: '',
    proj_filial: ''
  }

  constructor(private projetoService: ProjetoService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.projeto.id_projeto = activatedRoute.snapshot.paramMap.get('id_projeto')
  }

  ngOnInit(): void {
    this.buscarProjeto()
  }

  buscarProjeto() {
    this.projetoService.buscaUmProjeto(this.projeto.id_projeto).subscribe((res) => {
      this.projeto = res
    })
  }

  editarProjeto() {
    this.projetoService.editarProjeto(this.projeto).subscribe({
      next: () => alert("Projeto editado com sucesso"),
      error: erro => alert("Erro ao editar projeto"),
      complete: () => this.location.back()
    })
  }

}
