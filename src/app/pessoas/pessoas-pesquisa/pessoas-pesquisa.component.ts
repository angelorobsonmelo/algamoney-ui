import {Component, OnInit, ViewChild} from '@angular/core';
import {PessoaFiltro, PessoasService} from '../pessoas.service';
import {LazyLoadEvent} from 'primeng/primeng';
import {ConfirmationService} from 'primeng/components/common/api';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../core/error-handler.service';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit{
  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];
  @ViewChild('tabela') grid;

  ngOnInit(){}

  constructor(private pessoasService: PessoasService, private confirmation: ConfirmationService, private toasty: ToastyService, private errorHandler: ErrorHandlerService) {}

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoasService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;
      });
  }

  confirmarExclusao(pessoa: any){
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any){
    this.pessoasService.excluir(pessoa.codigo)
      .then(() => {
        if(this.grid.first === 0){
          this.pesquisar();
        }else {
          this.grid.first = 0;
        }
        this.toasty.success('Lançamento excluído com sucesso!');

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  listarTodas(){
    this.pessoasService.listarTodas().then(pessoas =>
      this.pessoas =  pessoas);
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  alternarStatus(pessoa: any): void {
    const novoStatus = !pessoa.ativo;

    this.pessoasService.mudarStatus(pessoa.codigo, novoStatus)
      .then(() => {
        const acao = novoStatus ? 'ativada' : 'desativada';

        pessoa.ativo = novoStatus;
        this.toasty.success(`Pessoa ${acao} com sucesso!`);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
