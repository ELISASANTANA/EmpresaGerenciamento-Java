import { FuncionarioService } from './../../../servicos/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from './../../../models/funcionarioModel';
import { Salario } from './../../../models/salarioModel';
import { SalarioService } from './../../../servicos/salario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  id_funcionario: any

  salario: Salario[] = []

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_foto: ''
  }

  constructor(private salarioService: SalarioService,
    private funcionarioService: FuncionarioService,
    private activatedRoute: ActivatedRoute) {
    this.id_funcionario = this.activatedRoute.snapshot.paramMap.get('id_funcionario')!
  }

  ngOnInit(): void {
    this.listarPagamentos()
    this.listarFuncionario()
  }

  listarPagamentos() {
    this.salarioService.salariosDoFuncionario(this.id_funcionario).subscribe((res) => {
      this.salario = res
    })
  }

  listarFuncionario() {
    this.funcionarioService.oneWorker(this.id_funcionario).subscribe((res) => {
      this.funcionario = res
    })
  }

  pagarSalario(salario: Salario, codigo: any) {
    this.salarioService.pagarSalario(salario, codigo).subscribe({
      next: () => {
        alert('Pagamento realizado com sucesso')
        this.listarPagamentos()
      },
      error: erro => {
        console.error(erro)
        alert('Erro, pagamento nao realizado')
      },
      complete: () => {
        console.info('Tudo certo')
      }
    })
  }

  cancelarSalario(salario: Salario, codigo: any) {
    this.salarioService.cancelarSalario(salario, codigo).subscribe({
      next: () => {
        alert('Salario reportado como atrasado com sucesso')
        this.listarPagamentos()
      },
      error: erro => {
        console.error(erro)
        alert('Erro, ao reportar salario atrasado')
      },
      complete: () => {
        console.info('tudo certo')
      }
    })
  }

  deletarSalario(codigo: any) {
    this.salarioService.deletarSalario(codigo).subscribe({
      next: () => {
        alert("Salário deletado")
      },
      error: erro => alert("Erro ao deletar salario"),
      complete: () => this.listarPagamentos()
    })
  }

}
