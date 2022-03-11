import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Funcionario } from '../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusao-funcionario',
  templateUrl: './exclusao-funcionario.component.html',
  styleUrls: ['./exclusao-funcionario.component.css']
})
export class ExclusaoFuncionarioComponent implements OnInit {

  id_cargo: any
  id_funcionario: any

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_foto: ''
  }

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.funcionario.id_funcionario = this.activatedRoute.snapshot.paramMap.get('id_funcionario')
    this.id_cargo = this.activatedRoute.snapshot.paramMap.get('id_cargo')
  }

  ngOnInit(): void {
    this.oneWorker()
  }

  oneWorker() {
    this.funcionarioService.oneWorker(this.funcionario.id_funcionario).subscribe((res) => {
      this.funcionario = res
    })
  }

  deleteWorker() {
    this.funcionarioService.excluirFuncionario(this.funcionario.id_funcionario).subscribe({
      next: () => {
        alert("Funcionario excluso do cargo")
      },
      error: erro => {
        alert("Erro ao excluido funcionario")
        this.router.navigate([`/funcionario-cargo/${this.id_cargo}`])
      },
      complete: () => {
        console.log('complete')
        this.router.navigate([`/funcionario-cargo/${this.id_cargo}`])
      }
    })
  }

}
