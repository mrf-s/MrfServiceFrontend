import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-service-center-page-services-item[title][payload][icon][price]',
  templateUrl: './service-center-services-item.component.html',
  styleUrls: ['./service-center-services-item.component.scss']
})
export class ServiceCenterServicesItemComponent {
  @Input() icon!: TemplateRef<any>;
  @Input() title!: string;
  @Input() payload!: string;
  @Input() price!: string;
  @Input() priceBold: boolean = false;
}
