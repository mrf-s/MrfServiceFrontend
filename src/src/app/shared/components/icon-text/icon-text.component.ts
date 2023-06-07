import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-icon-text[iconRef]',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss']
})
export class IconTextComponent {
  @Input() iconRef!: TemplateRef<any>;
}
