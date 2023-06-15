import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-number-input[formControl]',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {
  @Input() formControl!: FormControl;
  @Input() label: string = 'Телефон';

  ngOnInit(): void {
    this.formControl.addValidators(c => {
      if (c.value !== null && c.value.length !== '+7 (123) 112-31-31'.length) {
        return {tel: true};
      }
      return null;
    })
  }

  protected get numberErrors(): string[] {
    if (this.formControl.errors !== null && this.formControl.errors!['tel'] === true) {
      return ['Некорректный телефонный номер'];
    }

    return [];
  }
}
