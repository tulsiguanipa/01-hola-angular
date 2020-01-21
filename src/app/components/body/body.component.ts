import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html'
})


export class BodyComponent {

    mostrar = true;


    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad.',
        autor: 'Ben Parker'

        //cuando se quiere hacer referencia a una informacion definida en el component.ts se tiene que hacer padre e hijo
        //en este caso sería frase.mensaje
    }

    personajes:string [] = ['Spiderman', 'Venom', 'Dr.Octopus'];
}