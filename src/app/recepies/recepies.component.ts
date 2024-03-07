import { Component, OnInit, Output } from '@angular/core';
import { Recepie } from './recepie.model';

@Component({
    selector: 'app-recepies',
    templateUrl: './recepies.component.html',
    styleUrl: './recepies.component.css',
})
export class RecepiesComponent {
    displayRecepie: string = '';

    @Output() newRecepies: Recepie[] = [
        new Recepie(
            'Ramen',
            'recepie description',
            'https://japan.recipetineats.com/wp-content/uploads/2022/01/Home-made_Ramen_Broth_7171sq.jpg'
        ),
        new Recepie(
            'Ramen',
            'recepie description',
            'https://japan.recipetineats.com/wp-content/uploads/2022/01/Home-made_Ramen_Broth_7171sq.jpg'
        ),
    ];

    recepieToDisplay(recepie: Recepie) {
        // console.log(recepie);
    }
}
