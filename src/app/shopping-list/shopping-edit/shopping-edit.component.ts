import {
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    onAddIngredient() {
        // console.log(this.nameInputRef.nativeElement.value);
        // console.log(this.amountInputRef.nativeElement.value);
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        console.log(newIngredient);
        
        this.ingredientAdded.emit(newIngredient);
    }
}
