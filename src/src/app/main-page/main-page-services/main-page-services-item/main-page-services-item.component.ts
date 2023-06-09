import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-page-services-item[price]',
  templateUrl: './main-page-services-item.component.html',
  styleUrls: ['./main-page-services-item.component.scss']
})
export class MainPageServicesItemComponent {
  @Input() price!: number;
}
