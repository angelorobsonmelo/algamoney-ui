import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../../core/model';
import {PessoasService} from '../pessoas.service';
import {FormControl} from '@angular/forms';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(private PessoaService: PessoasService, private errorHandler: ErrorHandlerService, private toasty: ToastyService) { }

  ngOnInit() {
  }

  salvar(form: FormControl){
    this.PessoaService.adicionar(this.pessoa)
      .then(() => {
       form.reset();
       this.pessoa = new Pessoa();
       this.toasty.success('Pessoa cadastrada com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
