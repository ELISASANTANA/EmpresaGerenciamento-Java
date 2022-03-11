import { Cargo } from './../../../models/cargoModel';
import { CargoService } from './../../../servicos/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Funcionario } from '../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao-funcionario',
  templateUrl: './edicao-funcionario.component.html',
  styleUrls: ['./edicao-funcionario.component.css']
})
export class EdicaoFuncionarioComponent implements OnInit {

  modal: boolean = false;

  id_cargo: String

  novo_cargo: String

  cargos: Cargo[] = []

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_foto: ''
  }

  constructor(private funcionarioService: FuncionarioService,
    private cargoService: CargoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.funcionario.id_funcionario = this.activatedRoute.snapshot.paramMap.get('id_funcionario')
    this.id_cargo = this.activatedRoute.snapshot.paramMap.get('id_cargo')!
    this.novo_cargo = ''
  }

  ngOnInit(): void {
    this.oneWorker()
    this.listarCargos()
  }

  oneWorker() {
    this.funcionarioService.oneWorker(this.funcionario.id_funcionario).subscribe((res) => {
      this.funcionario = res
    })
  }

  editWorker() {
    this.funcionarioService.editWorker(this.funcionario, this.funcionario.id_funcionario, this.id_cargo).subscribe({
      next: () => alert('Funcionário editado com sucesso!'),
      error: erro => {
        alert('Erro ao editar funcionário')
        this.router.navigate([`/funcionario-cargo/${this.id_cargo}`])
      },
      complete: () => {
        console.info('complete')
        this.router.navigate([`/funcionario-cargo/${this.id_cargo}`])
      }
    })
  }

  listarCargos() {
    this.cargoService.findAllJobs().subscribe((res) => {
      this.cargos = res
    })
  }

  mostrarModal(id_cargo: String) {
    this.modal = true
    this.id_cargo = id_cargo
  }

  fecharModal() {
    this.modal = false
  }

  trocarCargo() {
    this.id_cargo = this.novo_cargo.slice(1, 3)
    console.log(this.id_cargo)
    // console.log(this.novo_cargo)
    this.funcionarioService.editWorker(this.funcionario, this.funcionario.id_funcionario, this.id_cargo).subscribe({
      next: () => alert('Funcionario transferido do cargo'),
      error: erro => {
        alert('Erro ao transferir cargo')
        this.modal = false
      },
      complete: () => {
        console.info('complete')
        this.modal = false
        this.router.navigate([`/funcionario-cargo/${this.id_cargo}`])
      }
    })
  }
}
