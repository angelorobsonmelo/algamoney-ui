import { Component, OnInit } from '@angular/core';
import {PessoaFiltro, PessoasService} from '../pessoas.service';
import {LazyLoadEvent} from 'primeng/primeng';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit{
  totalRegistros = 0;
  filtro = new PessoaFiltro();
  pessoas = [];

  ngOnInit(){}

  constructor(private pessoasService: PessoasService) {}

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;
    this.pessoasService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.pessoas = resultado.pessoas;
      });
  }

  listarTodas(){
    this.pessoasService.listarTodas().then(pessoas =>
        this.pessoas =  pessoas);
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

}
