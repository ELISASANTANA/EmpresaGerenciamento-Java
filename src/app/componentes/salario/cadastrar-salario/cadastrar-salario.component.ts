import { Salario } from './../../../models/salarioModel';
import { ActivatedRoute } from '@angular/router';
import { SalarioService } from './../../../servicos/salario.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastrar-salario',
  templateUrl: './cadastrar-salario.component.html',
  styleUrls: ['./cadastrar-salario.component.css']
})
export class CadastrarSalarioComponent implements OnInit {

  id_funcionario: any

  salario: Salario = {
    codigo: '',
    salario_descricao: '',
    data_receber_salario: '',
    salario_valor: 0,
    salario_status: 'PENDENTE '
  }

  constructor(private salarioService: SalarioService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {
    this.id_funcionario = activatedRoute.snapshot.paramMap.get('id_funcionario')
  }

  ngOnInit(): void {
  }

  inserirPagamento() {
    this.salarioService.inserirPagamento(this.salario, this.id_funcionario).subscribe({
      next: () => { alert('Salário gerado') },
      error: erro => console.error(erro),
      complete: () => {
        console.info('tudo certo')
        this.location.back()
      }
    })
  }

}
