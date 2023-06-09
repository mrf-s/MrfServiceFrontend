import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-main-page-section[sectionHeader]',
  templateUrl: './main-page-section.component.html',
  styleUrls: ['./main-page-section.component.scss']
})
export class MainPageSectionComponent {
  @Input() sectionHeader!: TemplateRef<any>;
}
