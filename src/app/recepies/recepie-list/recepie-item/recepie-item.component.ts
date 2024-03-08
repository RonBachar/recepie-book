import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
    selector: 'app-recepie-item',
    templateUrl: './recepie-item.component.html',
    styleUrl: './recepie-item.component.css',
})
export class RecepieItemComponent implements OnInit {
    @Input() recepie: Recepie;

    // Emit our own event: wont pass any information because it will contain no information
    @Output() recepieSelected = new EventEmitter<void>();

    constructor() {}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }

    // implement onSelectRecepie
    onSelected() {
        // console.log(this.recepie);
        // Trigger, WE DONT PASS ANY VALUE because we specify that we wont in the event emitter <void>
        // WHAT IS THE PARENT LISTENING TO ?
        this.recepieSelected.emit();
    }
}
