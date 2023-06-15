import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-order-call-modal-content',
  templateUrl: './order-call-modal-content.component.html',
  styleUrls: ['./order-call-modal-content.component.scss']
})
export class OrderCallModalContentComponent {
  private requiredError: string = 'Это поле обязательно'
  @Output() closed: EventEmitter<null> = new EventEmitter<null>();
  protected name: FormControl = new FormControl('', Validators.required);
  protected phone: FormControl = new FormControl('', Validators.required);
  protected phoneType: FormControl = new FormControl();
  protected whatsWrong: FormControl = new FormControl();
  protected form: FormGroup = new FormGroup({
    name: this.name,
    phone: this.phone,
    phoneType: this.phoneType,
    whatsWrong: this.whatsWrong
  });

  protected onSubmit(): void {
    this.closed.emit();
  }
}
