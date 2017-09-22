import {LOCALE_ID, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import {ErrorHandlerService} from './error-handler.service';
import {ToastyModule} from 'ng2-toasty';
import {ConfirmationService, ConfirmDialogModule} from 'primeng/primeng';
import {LancamentoService} from '../lancamentos/lancamento.service';
import {PessoasService} from '../pessoas/pessoas.service';

@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent, ToastyModule, ConfirmDialogModule],
  providers: [ErrorHandlerService, LancamentoService, PessoasService, ConfirmationService, { provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class CoreModule { }
