import {Component, EventEmitter, Input, Output, Self, TemplateRef} from '@angular/core';
import {GuidService} from "../../../services/guid.service";
import {ControlValueAccessor, FormControl, NgControl} from "@angular/forms";
import {asString} from "../../../helpers/helpers";

@Component({
  selector: 'app-input[formControl]',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() formControl!: FormControl;
  @Input() label: TemplateRef<any> | string = 'Label';
  @Input() type: 'text' | 'tel' | 'textarea' = 'text';
  @Input() displayErrorPolicy: 'After Touched' | 'Manual' = 'After Touched';
  @Input() ngxMaskMask: string = '';
  @Input() ngxMaskPrefix: string = '';
  @Input() errors: string[] = [];
  protected guid: string;

  protected get showErrors() {
    return this.formControl.invalid && this.formControl.touched;
  }

  public get error(): string | null {
    if (this.formControl.errors !== null && this.formControl.errors!['required'] === true) {
      return 'Это поле обязательно';
    }

    if (this.errors.length >= 1) {
      return this.errors[0];
    }

    return null;
  }

  constructor(guidGenerator: GuidService) {
    this.guid = guidGenerator.guid;
  }

  protected labelAsString(): string | undefined {
    return asString(this.label);
  }

  protected labelAsTemplate(): TemplateRef<any> | undefined {
    if (this.labelAsString() === undefined) {
      return this.label as TemplateRef<any>;
    }

    return undefined;
  }
}
