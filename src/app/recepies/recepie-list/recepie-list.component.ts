import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
    selector: 'app-recepie-list',
    templateUrl: './recepie-list.component.html',
    styleUrl: './recepie-list.component.css',
})
export class RecepieListComponent {
    @Input() recepies: Recepie[];
    @Output() selectedRecepie =  new  EventEmitter<Recepie>()

    onDisplayRecepie(recepie: Recepie) {
        console.log(recepie);
        this.selectedRecepie.emit(recepie)
    }
}
