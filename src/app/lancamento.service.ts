import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoUrl = 'http://localhost:8080/api/lancamentos';

  constructor( private http: HttpClient) { }

  listar () {
    return this.http.get<any[]>(`${this.lancamentoUrl}`);
  }
}
