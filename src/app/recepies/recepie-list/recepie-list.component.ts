import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
    selector: 'app-recepie-list',
    templateUrl: './recepie-list.component.html',
    styleUrl: './recepie-list.component.css',
})
export class RecepieListComponent implements OnInit {

    @Output() recepieWasSelected = new EventEmitter<Recepie>();

    recepies: Recepie[] = [
        new Recepie(
            'Ramen',
            'Ramen recepie description',
            'https://japan.recipetineats.com/wp-content/uploads/2022/01/Home-made_Ramen_Broth_7171sq.jpg'
        ),
        new Recepie(
            'Roast Chicken',
            'Roast Chicken description',
            'https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/pass/undefined'
        ),
    ];

       
    ngOnInit(): void {
        
    }

    onRecepieSelected(recepie: Recepie) {
        // console.log('recepieSelected: ' + recepie);
        this.recepieWasSelected.emit(recepie);
    }



}
