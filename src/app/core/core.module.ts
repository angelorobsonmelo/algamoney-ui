import {RouterModule} from '@angular/router';
import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfirmationService} from 'primeng/components/common/api';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import {ToastyModule} from 'ng2-toasty';

import {ErrorHandlerService} from './error-handler.service';
import {PessoaService} from '../pessoas/pessoa.service';
import {LancamentoService} from './../lancamentos/lancamento.service';
import {CategoriaService} from './../categorias/categoria.service';
import {NavbarComponent} from './navbar/navbar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../seguranca/auth.service';
import {JwtHelper} from 'angular2-jwt';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent, PaginaNaoEncontradaComponent],
  exports: [
    NavbarComponent,
    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    ErrorHandlerService,
    ConfirmationService,
    JwtHelper,
    Title,
    AuthService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
