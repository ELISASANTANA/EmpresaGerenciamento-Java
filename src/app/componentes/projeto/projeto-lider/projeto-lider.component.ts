import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from './../../../servicos/funcionario.service';
import { ProjetoService } from './../../../servicos/projeto.service';
import { Projeto } from './../../../models/projetoModel';
import { Funcionario } from './../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-lider',
  templateUrl: './projeto-lider.component.html',
  styleUrls: ['./projeto-lider.component.css']
})
export class ProjetoLiderComponent implements OnInit {

  id_projeto: any

  modal: boolean = false

  liderDefinido: boolean = false

  funcSemProjeto: any

  funcSemProjetoEscolhido: any = []

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    id_cargo: '',
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
    this.id_projeto = this.activatedRoute.snapshot.paramMap.get('id_projeto')!
  }

  ngOnInit(): void {
    this.buscarLiderDoProjeto()
    this.buscarFuncSemProjeto()
    this.buscarProjeto()
  }

  buscarProjeto() {
    this.projetoService.buscaUmProjeto(this.id_projeto).subscribe((res) => {
      this.projeto = res
    })
  }

  buscarLiderDoProjeto() {
    this.funcionarioService.buscarLiderDoProjeto(this.id_projeto).subscribe((res) => {
      if (res == undefined) {
        alert('sem lider definido')
        this.liderDefinido = false
      } else {
        this.funcionario = res
        this.liderDefinido = true
        console.log(res)
      }
    })
  }

  buscarFuncSemProjeto() {
    this.funcionarioService.buscaFuncSemProjeto().subscribe((res) => {
      this.funcSemProjeto = res
      console.log(res)
    })
  }

  mostrarFuncionario() {
    this.funcionario = this.funcSemProjetoEscolhido
  }

  atribuirFuncProjeto() {
    this.projetoService.buscaUmProjeto(this.id_projeto).subscribe((res) => {
      this.projeto = res
    })
    this.projetoService.atribuirLiderProjeto(this.projeto, this.id_projeto, this.funcionario.id_funcionario).subscribe(({
      next: () => alert(`Funcionario definido lider do projeto ${this.id_projeto}!`),
      error: erro => {
        alert(`Erro definir funcionario como lider do projeto ${this.id_projeto}.`)
        this.router.navigate([`/projeto-lider/${this.id_projeto}`])
      },
      complete: () => {
        console.info('Complete')
        this.router.navigate(['/projetos'])
      }
    }))
  }

  deixarProjetoSemLider() {
    this.projetoService.deixarProjetoSemLider(this.projeto, this.id_projeto, this.funcionario.id_funcionario).subscribe({
      next: () => {
        alert(`Funcionário líder removido do projeto ${this.id_projeto}`)
      },
      error: erro => {
        alert(`Erro ao cadastrar funcionário no cargo ${this.id_projeto}`)
        this.router.navigate([`/projeto-lider/${this.id_projeto}`])
      },
      complete: () => {
        console.log('complete')
        this.router.navigate(["/projetos"])
      }
    })
  }
}
