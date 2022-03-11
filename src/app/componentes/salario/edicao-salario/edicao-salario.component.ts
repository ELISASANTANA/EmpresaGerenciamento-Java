import { ActivatedRoute } from '@angular/router';
import { SalarioService } from './../../../servicos/salario.service';
import { Salario } from './../../../models/salarioModel';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edicao-salario',
  templateUrl: './edicao-salario.component.html',
  styleUrls: ['./edicao-salario.component.css']
})
export class EdicaoSalarioComponent implements OnInit {

  codigo: any
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
    this.codigo = activatedRoute.snapshot.paramMap.get('codigo')
    this.id_funcionario = activatedRoute.snapshot.paramMap.get('id_funcionario')
  }

  ngOnInit(): void {
    this.buscarUmSalario()
  }

  buscarUmSalario() {
    this.salarioService.buscarUmSalario(this.codigo).subscribe((res) => {
      this.salario = res
      this.salario.data_receber_salario = res.data_receber_salario.slice(0, 10)
    })
  }

  editarSalario() {
    this.salarioService.editarSalario(this.salario, this.codigo, this.id_funcionario).subscribe({
      next: () => { alert('Salário editado com sucesso') },
      error: erro => {
        alert('Erro ao editar boleto')
      },
      complete: () => {
        console.info('tudo certo')
        this.location.back()
      }
    })
  }

}
