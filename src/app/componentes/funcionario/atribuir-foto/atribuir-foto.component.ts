import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FuncionarioService } from './../../../servicos/funcionario.service';
import { Funcionario } from './../../../models/funcionarioModel';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-atribuir-foto',
  templateUrl: './atribuir-foto.component.html',
  styleUrls: ['./atribuir-foto.component.css']
})
export class AtribuirFotoComponent implements OnInit {

  foto: any

  funcionario: Funcionario = {
    id_funcionario: '',
    func_nome: '',
    func_cidade: '',
    func_foto: ''
  }

  constructor(private funcionarioService: FuncionarioService,
    private http: HttpClient,
    private location: Location,
    private activatedRoute: ActivatedRoute) {
    this.funcionario.id_funcionario = activatedRoute.snapshot.paramMap.get('id_funcionario')
  }

  ngOnInit(): void {
    this.mostrarFuncionario()
  }

  mostrarFuncionario() {
    this.funcionarioService.oneWorker(this.funcionario.id_funcionario).subscribe((res) => {
      this.funcionario = res
    })
  }


  subirFoto(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.foto = event.target.files[0]

      const formData = new FormData()
      formData.append("foto", this.foto)

      const nome: String = this.funcionario.func_nome + "-" + event.target.files[0].name

      this.http.post(`http://localhost:8080/empresa/envio/${this.funcionario.id_funcionario}?nome=${nome}`, formData).subscribe({
        next: () => {
          console.log("Foto enviada")
          this.location.back()
        },
        complete: () => console.log('ok')
      })
      alert("Foto inserida para o funcionário")
      this.location.back()
    }
  }

}
