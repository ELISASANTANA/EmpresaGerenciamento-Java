import { CargoService } from '../../../servicos/cargo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo } from '../../../models/cargoModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicao-cargo',
  templateUrl: './edicao-cargo.component.html',
  styleUrls: ['./edicao-cargo.component.css']
})
export class EdicaoCargoComponent implements OnInit {

  cargo: Cargo = {
    id_cargo: '',
    cargo_nome: '',
    cargo_atribuicao: ''
  }

  constructor(private cargoService: CargoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cargo.id_cargo = this.activatedRoute.snapshot.paramMap.get('id')
    this.oneJob()
  }

  oneJob() {
    this.cargoService.oneJob(this.cargo.id_cargo).subscribe((res) => {
      this.cargo = res
      console.log(this.cargo)
    })
  }

  editJob() {
    this.cargoService.editJob(this.cargo).subscribe({
      complete: () => alert("Cargo editado com sucesso!"),
      error: () => alert("Erro: cargo nao pode ser editada")
    })
    setTimeout(() => {
      this.router.navigate(['/cargos']);
    }, 1000)
  }

}
