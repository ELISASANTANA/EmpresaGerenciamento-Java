import { Cargo } from '../../../models/cargoModel';
import { CargoService } from '../../../servicos/cargo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cargos',
  templateUrl: './lista-cargos.component.html',
  styleUrls: ['./lista-cargos.component.css']
})
export class ListaCargosComponent implements OnInit {

  cargos: Cargo[] = []

  constructor(private cargoService: CargoService, private router: Router) { }

  ngOnInit(): void {
    this.listAllJobs()
  }

  listAllJobs() {
    this.cargoService.findAllJobs().subscribe(res => {
      this.cargos = res;
    })
  }

}
