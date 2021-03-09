import { Component, enableProdMode, ValueProvider } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
    
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad  : number = 45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
     
    obtenerNombre(): string{
        return `El nombre del super heroe es: ${ this.nombre } y su respectiva edad es: ${ this.edad }`
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 30;
    }


}