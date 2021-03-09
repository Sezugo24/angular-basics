import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    //Las declaraciones basicamente son los componentes
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    
    //Que cosas quiero hacer publicas o visibles fuera de este modulo
    //En este caso el listado component, ya que que se esta pintando en el app.html
    exports:[
        ListadoComponent
    ],

    //Imports significa que van modulos, unicamente modulos
    imports:[
        CommonModule // Nos ofrece algunas directivas como ngIf y ngFor
    ]


})




export class HeroesModule{} //HeroesModule se importa en el app.module para que sea visible en mi app