import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdownVisibility]'
})

export class DropdownDirective implements OnInit {

    @Input() defaultDisplay: string = 'none';

    @Input('appDropdownVisibility') displayOn : string = 'block';

    @HostBinding('style.display') display: string;

    constructor() { }

    ngOnInit() {
        this.display = this.defaultDisplay;
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseclick') mouseclick(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.display = this.displayOn
    }


}