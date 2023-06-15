import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-main-page-services-item[title][payload][icon][price]',
  templateUrl: './main-page-services-item.component.html',
  styleUrls: ['./main-page-services-item.component.scss']
})
export class MainPageServicesItemComponent {
  @Input() icon!: TemplateRef<any>;
  @Input() title!: string;
  @Input() payload!: string;
  @Input() price!: string;
  @Input() priceBold: boolean = false;
}
