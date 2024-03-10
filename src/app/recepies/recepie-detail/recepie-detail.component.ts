import { Component, Input } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
    selector: 'app-recepie-detail',
    templateUrl: './recepie-detail.component.html',
    styleUrl: './recepie-detail.component.css',
})
export class RecepieDetailComponent {
    @Input() recepie: Recepie;
    displayMenu: boolean = false;

    toggleMenu(): void { // Added type annotation for the method
        this.displayMenu = !this.displayMenu;
    }
}
