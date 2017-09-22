import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PessoasModule} from './pessoas/pessoas.module';
import {LancamentosModule} from './lancamentos/lancamentos.module';
import {CoreModule} from './core/core.module';
import {LancamentoService} from './lancamentos/lancamento.service';
import {HttpModule} from '@angular/http';
import {PessoasService} from './pessoas/pessoas.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    LancamentosModule,
    PessoasModule,
    CoreModule
  ],
  providers: [LancamentoService, PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
