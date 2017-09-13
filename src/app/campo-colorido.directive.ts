import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  constructor() {

  }

  @HostListener('focus') aoGanharFocos(){
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') aoPerderFocos(){
    this.corDeFundo = 'transparent'

  }

}
