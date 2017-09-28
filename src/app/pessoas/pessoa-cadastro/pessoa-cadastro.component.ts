import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../../core/model';
import {PessoaService} from '../pessoa.service';
import {FormControl} from '@angular/forms';
import {ErrorHandlerService} from '../../core/error-handler.service';
import {ToastyService} from 'ng2-toasty';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService,
              private errorHandler: ErrorHandlerService,
              private toasty: ToastyService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title) { }

  ngOnInit() {
    const codigoPessoa = this.route.snapshot.params['codigo'];

    this.title.setTitle('Nova pessoa');

    if (codigoPessoa){
      this.carregarPessoa(codigoPessoa);
    }
  }

  get editando(){
    return Boolean(this.pessoa.codigo);
  }

  adicionarPessoa(pessoa: Pessoa){
    console.log('adicinar')
    this.pessoaService.adicionar(pessoa).then(pessoa => {
      this.toasty.success('Lançamento adicionado com sucesso!');

      this.router.navigate(['/pessoas', pessoa.codigo]);
    })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(){
    if (this.editando){
      this.atualizarPessoa(this.pessoa);
    }else {
      this.adicionarPessoa(this.pessoa);
    }
  }

  novo(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.pessoa = new Pessoa();
    }.bind(this), 1);

    this.router.navigate(['/pessoas/novo']);
  }

  private carregarPessoa(codigoPessoa: number) {
       this.pessoaService.buscarPorCodigo(codigoPessoa).then(pessoa => {
         this.pessoa = pessoa;
         this.atualizarTituloEdicao();
       }).catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição da pessoa: ${this.pessoa.nome}`);
  }

  private atualizarPessoa(pessoa: Pessoa) {
    this.pessoaService.atualizar(pessoa)
      .then(lancamento => {
        this.pessoa = pessoa;

        this.toasty.success('Pessoa alterada com sucesso!');
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
