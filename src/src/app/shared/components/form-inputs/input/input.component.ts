import {Component, Input} from '@angular/core';
import {GuidService} from "../../../services/guid.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string = 'Label';
  @Input() type: string = 'text';
  @Input() model: string = '';
  @Input() ngxMaskMask: string = '';
  @Input() ngxMaskPrefix: string = '';
  protected guid: string;

  constructor(guidGenerator: GuidService) {
    this.guid = guidGenerator.guid;
  }
}
