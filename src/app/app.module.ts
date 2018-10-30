import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LancamentosListagemComponent } from './lancamentos-listagem/lancamentos-listagem.component';
import { LancamentoService } from './lancamento.service';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
