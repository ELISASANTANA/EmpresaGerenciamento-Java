import { Cargo } from '../../../models/cargoModel';
import { CargoService } from '../../../servicos/cargo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cargo',
  templateUrl: './cadastro-cargo.component.html',
  styleUrls: ['./cadastro-cargo.component.css']
})
export class CadastroCargoComponent implements OnInit {

  cargo: Cargo = {
    cargo_nome: '',
    cargo_atribuicao: ''
  }

  constructor(private cargoService: CargoService, private router: Router) { }

  ngOnInit(): void {
  }

  addJob() {
    this.cargoService.addJob(this.cargo).subscribe({
      next: () => {
        alert("Cadastro realizado com sucesso!")
      },
      error: erro => {
        alert("Erro ao cadastrar novo cargo")
        this.router.navigate(['/cargos'])
      },
      complete: () => {
        console.info('Complete')
        this.router.navigate(['/cargos'])
      }
    })
  }

}
