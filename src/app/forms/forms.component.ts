import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{

  cliente = new Cliente();
  profissoes = ['Programador', 'Empresário', 'Outra'];

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.primeiroNome;
    // this.cliente.email = form.value.emailAddress;
    // this.cliente.profissao = form.value.profissao;

    console.log(form);
    // console.log(this.cliente);
  }

}
