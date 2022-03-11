import { FuncionarioService } from './../../../servicos/funcionario.service';
import { Funcionario } from './../../../models/funcionarioModel';
import { Projeto } from './../../../models/projetoModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetoService } from './../../../servicos/projeto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atribuir-projeto',
  templateUrl: './atribuir-projeto.component.html',
  styleUrls: ['./atribuir-projeto.component.css']
})
export class AtribuirProjetoComponent implements OnInit {

  id_funcionario: any

  projetoDefinido: boolean = false

  projSemLider: any

  projEscolhido: any = []

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_foto: ''
  }

  projeto: Projeto = {
    id_projeto: '',
    proj_nome: '',
    proj_filial: ''
  }

  constructor(private projetoService: ProjetoService,
    private funcionarioService: FuncionarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.id_funcionario = this.activatedRoute.snapshot.paramMap.get('id_funcionario')
  }

  ngOnInit(): void {
    this.buscarProjSemLider()
    this.buscarFuncionario()
    this.buscarProjetoComLider()
  }

  buscarProjetoComLider() {
    this.projetoService.buscarProjetoFunc(this.id_funcionario).subscribe((res) => {
      if (res == undefined) {
        alert('Funcionário sem projeto definido')
        this.projetoDefinido = false
      } else {
        this.projeto = res
        this.projetoDefinido = true
      }
    })
  }

  buscarProjSemLider() {
    this.projetoService.buscarProjSemLider().subscribe((res) => {
      this.projSemLider = res
    })
  }

  mostrarProjeto() {
    this.projeto = this.projEscolhido
  }

  buscarFuncionario() {
    this.funcionarioService.oneWorker(this.id_funcionario).subscribe((res) => {
      this.funcionario = res
    })
  }

  // atribuir projeto ao funcionario
  atribuirProjetoFunc() {
    this.funcionarioService.oneWorker(this.id_funcionario).subscribe((res) => {
      this.funcionario = res
    })
    this.funcionarioService.atribuirProjFunc(this.funcionario, this.id_funcionario, this.projeto.id_projeto).subscribe({
      next: () => alert(`Funcionário definido como lider do projeto ${this.projeto.id_projeto}!`),
      error: erro => {
        alert(`Erro definir funcionario como lider do projeto ${this.projeto.id_projeto}.`)
        this.router.navigate([`/projeto-funcionario/${this.id_funcionario}`])
      },
      complete: () => {
        console.info('Complete')
        this.router.navigate(['/funcionario-projeto'])
      }
    })
  }

}
