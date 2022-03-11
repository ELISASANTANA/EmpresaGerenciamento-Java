import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../../../servicos/funcionario.service';
import { Funcionario } from '../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {

  id_cargo: string = ''
  funcionarios: Funcionario[] = []

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.id_cargo = this.activatedRoute.snapshot.paramMap.get('id_cargo')!
  }

  ngOnInit(): void {
    this.listWorkersByJob()
  }

  listWorkersByJob() {
    this.funcionarioService.listWorkerJob(this.id_cargo).subscribe((res) => {
      this.funcionarios = res
    })
  }

}
