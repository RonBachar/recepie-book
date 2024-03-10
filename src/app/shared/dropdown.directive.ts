import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdownVisibility]'
})

export class DropdownDirective implements OnInit {

    @Input() defaultDisplay: string = 'none';
    // @Input('appDropdownVisibility') display: string = 'blue';

    @HostBinding('style.display') display: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.display = this.defaultDisplay;
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('click') mouseclick(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.display = this.defaultDisplay;
    }


}