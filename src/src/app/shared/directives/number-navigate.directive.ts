import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import {InfoProviderService} from "../services/info-provider.service";

@Directive({
  selector: '[appNumberNavigate]'
})
export class NumberNavigateDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2, private info: InfoProviderService) { }

  ngOnInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'href', `tel:${this.info.phoneNumber}`)
  }
}
