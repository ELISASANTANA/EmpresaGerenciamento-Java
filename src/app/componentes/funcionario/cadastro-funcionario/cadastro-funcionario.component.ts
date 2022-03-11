import { Funcionario } from '../../../models/funcionarioModel';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  id_cargo: string

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_foto: ''
  }

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.id_cargo = this.activatedRoute.snapshot.paramMap.get('id_cargo')!
  }

  ngOnInit(): void {
  }

  addWorker() {
    this.funcionarioService.addWorker(this.funcionario, this.id_cargo).subscribe({
      next: () => {
        alert(`Novo funcionário cadastradado no cargo ${this.id_cargo}`)
      },
      error: erro => {
        alert(`Erro ao cadastrar funcionário no cargo ${this.id_cargo}`)
        this.router.navigate([`/funcionario-cargo/${this.id_cargo}`])
      },
      complete: () => {
        console.log('complete')
        this.router.navigate([`/funcionario-cargo/${this.id_cargo}`])
      }
    })
  }
}
