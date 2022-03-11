import { Cargo } from '../../../models/cargoModel';
import { CargoService } from '../../../servicos/cargo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclusao-cargo',
  templateUrl: './exclusao-cargo.component.html',
  styleUrls: ['./exclusao-cargo.component.css']
})
export class ExclusaoCargoComponent implements OnInit {

  cargo: Cargo = {
    id_cargo: '',
    cargo_nome: '',
    cargo_atribuicao: ''
  }

  constructor(private cargoService: CargoService, private activedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.activedRoute.snapshot.paramMap.get('id')
    this.oneJob()
  }

  oneJob() {
    this.cargoService.oneJob(this.cargo.id_cargo).subscribe((res) => {
      this.cargo = res
      console.log(this.cargo)
    })
  }

  deleteJob() {
    this.cargoService.deleteJob(this.cargo.id_cargo).subscribe({
      complete: () => alert("Cargo excluida com sucesso"),
      error: () => alert("Esse cargo possui funcionario, não pode ser excluida")
    })
    setTimeout(() => {
      this.router.navigate(['/cargos']);
    }, 1000)
  }

}
