import { Cargo } from './../../../models/cargoModel';
import { CargoService } from './../../../servicos/cargo.service';
import { HttpClient } from '@angular/common/http';
import { FuncionarioService } from './../../../servicos/funcionario.service';
import { Funcionario } from './../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastrar-funcionario-sem-cargo',
  templateUrl: './cadastrar-funcionario-sem-cargo.component.html',
  styleUrls: ['./cadastrar-funcionario-sem-cargo.component.css']
})
export class CadastrarFuncionarioSemCargoComponent implements OnInit {

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_foto: '../../../../assets/img/nopic.png'
  }

  foto: any

  cargos: Cargo[] = []

  idFuncionarioCadastrado: any

  id_cargo: any

  cargo: any

  funcionarioCadastrado: boolean = false

  constructor(private funcionarioService: FuncionarioService,
    private cargoService: CargoService,
    private location: Location,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.listarCargos()
  }

  listarCargos() {
    this.cargoService.findAllJobs().subscribe((res) => {
      this.cargos = res
    })
  }

  addWorker() {
    this.cargo = this.id_cargo.slice(1, 3)
    console.log(this.cargo)
    this.funcionarioService.addWorker(this.funcionario, this.cargo).subscribe({
      next: () => {
        alert(`Novo funcionário cadastradado no cargo ${this.id_cargo}`)
        this.location.back()
      },
      error: erro => {
        alert(`Erro ao cadastrar funcionário no cargo ${this.id_cargo}`)
      },
      complete: () => {
        console.log('complete')
        this.funcionarioService.buscarFuncionarioPeloNome(this.funcionario.func_nome).subscribe((res) => {
          this.idFuncionarioCadastrado = res.id_funcionario
          this.funcionarioCadastrado = true
        })
      }
    })
  }

  subirFoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.foto = event.target.files[0]

      const formData = new FormData()
      formData.append("foto", this.foto)

      const nome: String = this.funcionario.func_nome + "-" + event.target.files[0].name

      this.http.post(`http://localhost:8080/empresa/envio/${this.idFuncionarioCadastrado}?nome=${nome}`, formData).subscribe({
        next: () => console.log("Foto enviada"),
        complete: () => console.info('Ok')
      })
      alert("Foto inserida para o funcionário")
      this.location.back()
    }
  }
}
