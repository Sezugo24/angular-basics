import { Component } from "@angular/core";





@Component({
    selector: 'app-contador',
    template: `
                <h3>La base es: <strong>{{ base }}</strong></h3>
                <button (click)="operacion(base)" >+{{ base }}</button>
                <span>{{ resultado }}</span>
                <button  (click)="operacion(-base)">-{{ base }}</button>
    `        
})
export class ContadorComponent{
    title: string = 'Contador App';

    //number: number = 10;
    base: number = 5;
    resultado: number = 5;

    operacion(valor: number){
     this.resultado = this.resultado + valor;
  }



}