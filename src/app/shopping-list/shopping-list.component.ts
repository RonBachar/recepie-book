import { Component, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {

    @Output() ingridients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10),
    ];

    onIngredientAdded(ingredient: Ingredient) {
        this.ingridients.push(ingredient);
    }
}
