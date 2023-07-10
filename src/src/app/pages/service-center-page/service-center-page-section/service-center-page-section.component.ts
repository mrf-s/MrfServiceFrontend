import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-service-center-page-section[sectionHeader]',
  templateUrl: './service-center-page-section.component.html',
  styleUrls: ['./service-center-page-section.component.scss']
})
export class ServiceCenterPageSectionComponent {
  @Input() sectionHeader!: TemplateRef<any>;
}
