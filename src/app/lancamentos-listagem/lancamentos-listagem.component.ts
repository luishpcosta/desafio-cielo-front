import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamentos-listagem',
  templateUrl: './lancamentos-listagem.component.html',
  styleUrls: ['./lancamentos-listagem.component.css']
})
export class LancamentosListagemComponent implements OnInit {

  lancamentos: Array<any>;

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.lancamentoService.listar().subscribe(dados => this.lancamentos = dados);
  }

}
