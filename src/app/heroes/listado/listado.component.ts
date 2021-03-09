import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'IronMan', 'Thor', 'Capitan America', 'Hulk', 'Batman', 'Super Man']; 
  heroeBorrado: string = '';
  interuptor: boolean = false;

  borrarHeroe(){
    console.log('Borrando...');
    let elementoBorrado = this.heroes.shift() || ''; //Me borra el primer elemento de un arreglo en Js.
    this.heroeBorrado = elementoBorrado;
    console.log(elementoBorrado);
    this.interuptor = true;
    
}

  

}