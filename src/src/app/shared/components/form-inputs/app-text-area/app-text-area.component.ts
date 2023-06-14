import {Component, Input} from '@angular/core';
import {GuidService} from "../../../services/guid.service";

@Component({
  selector: 'app-text-area',
  templateUrl: './app-text-area.component.html',
  styleUrls: ['./app-text-area.component.scss']
})
export class AppTextAreaComponent {
  @Input() label: string = 'Label';
  @Input() model: string = '';
  protected guid: string;

  constructor(guidGenerator: GuidService) {
    this.guid = guidGenerator.guid;
  }
}
