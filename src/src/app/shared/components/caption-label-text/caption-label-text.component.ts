import {Component, Input, TemplateRef} from '@angular/core';
import {asString, isString} from "../../helpers/helpers";

@Component({
  selector: 'app-caption-label-text',
  templateUrl: './caption-label-text.component.html',
  styleUrls: ['./caption-label-text.component.scss']
})
export class CaptionLabelTextComponent {
  @Input() label?: TemplateRef<any> | string;
}
