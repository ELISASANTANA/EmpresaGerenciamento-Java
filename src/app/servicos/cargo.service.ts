import { Cargo } from './../models/cargoModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  baseUrl: String = 'http://localhost:8080/empresa'

  constructor(private http: HttpClient) { }

  findAllJobs(): Observable<Cargo[]> {
    const url = `${this.baseUrl}/cargo`
    return this.http.get<Cargo[]>(url)
  }

  addJob(cargo: Cargo): Observable<Cargo> {
    const url = `${this.baseUrl}/cargo`
    return this.http.post<Cargo>(url, cargo)
  }

  oneJob(id: String): Observable<Cargo> {
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.get<Cargo>(url)
  }

  deleteJob(id: String): Observable<void> {
    const url = `${this.baseUrl}/cargo/${id}`
    return this.http.delete<void>(url)
  }

  editJob(cargo: Cargo): Observable<Cargo> {
    const url = `${this.baseUrl}/cargo/${cargo.id_cargo}`
    return this.http.put<Cargo>(url, cargo)
  }
}
