import {Component, Input} from '@angular/core';
import {GuidService} from "../../../services/guid.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string = 'Label';
  @Input() type: 'text' | 'tel' | 'textarea' = 'text';
  @Input() model: string = '';
  @Input() ngxMaskMask: string = '';
  @Input() ngxMaskPrefix: string = '';
  private telMask: string = '(000) 000-00-00';
  private telPrefix: string = '+7 ';
  protected guid: string;

  ngOnInit(): void {
    if (this.type === 'tel') {
      if (this.ngxMaskMask === '') {
        this.ngxMaskMask = this.telMask;
      }
      if (this.ngxMaskPrefix === '') {
        this.ngxMaskPrefix = this.telPrefix;
      }
    }
  }

  constructor(guidGenerator: GuidService) {
    this.guid = guidGenerator.guid;
  }
}
