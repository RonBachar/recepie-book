import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
    selector: 'app-recepie-item',
    templateUrl: './recepie-item.component.html',
    styleUrl: './recepie-item.component.css',
})
export class RecepieItemComponent implements OnInit {
    @Input() recepie: Recepie;
    @Output() displayRecepie = new EventEmitter<Recepie>();

    constructor() {}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }

    onDisplayDetail(selectedRecepie: Recepie) {
        // console.log(selectedRecepie);
        this.displayRecepie.emit(selectedRecepie);
    }


    
}
