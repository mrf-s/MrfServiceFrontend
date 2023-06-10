import {Directive, ElementRef, Renderer2} from '@angular/core';
import {InfoProviderService} from "../services/info-provider.service";

@Directive({
  selector: '[appNavigateTelegram]'
})
export class NavigateTelegramDirective {
  constructor(private el: ElementRef, private renderer: Renderer2, private info: InfoProviderService) { }

  ngOnInit(): void {
    this.renderer.setAttribute(this.el.nativeElement, 'href', this.info.telegramUrl)
  }
}
