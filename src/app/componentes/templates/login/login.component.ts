import { RestapiService } from './../../../servicos/restapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String = ''
  password: String = ''

  constructor(private service: RestapiService) { }

  ngOnInit(): void {
  }

  doLogin() {
    this.service.login(this.username, this.password).subscribe(data => {
      console.log(data)
    })
  }

}
