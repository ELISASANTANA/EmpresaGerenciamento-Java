import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FuncionarioService } from './../../../servicos/funcionario.service';
import { Funcionario } from './../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';

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
    func_foto: ''
  }

  foto: any

  idFuncionarioCadastrado: any

  funcionarioCadastrado: boolean = false

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  cadastrarFuncionario() {
    this.funcionarioService.addWorkerSemCargo(this.funcionario).subscribe({
      complete: () => {
        alert("Funcionario cadastrado com sucesso")
        this.funcionarioService.buscarFuncionarioPeloNome(this.funcionario.func_nome).subscribe((res) => {
          this.idFuncionarioCadastrado = res.id_funcionario
          this.funcionarioCadastrado = true
        })
      },
      error: () => { alert("Erro ao cadastrar funcionário") }
    })
  }

  subirFoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.foto = event.target.files[0]

      const formData = new FormData()
      formData.append("foto", this.foto)

      const nome: String = this.funcionario.func_nome + "-" + event.target.files[0].name

      this.http.post(`http://localhost:8080/empresa/envio/${this.idFuncionarioCadastrado}?nome=${nome}`, formData).subscribe({
        next: () => console.log("Foto enviada")
      })
      alert("Foto inserida para o funcionário")
    }
  }

  // 'c:/home/elisasantana/Documents/empresa-spring/empresa-front/src/assets/img/renata-func.png'

}
