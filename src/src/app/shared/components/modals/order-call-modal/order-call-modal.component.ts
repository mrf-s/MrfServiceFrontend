import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {BackendService} from "../../../services/backend.service";

@Component({
  selector: 'app-order-call-modal',
  templateUrl: './order-call-modal.component.html',
  styleUrls: ['./order-call-modal.component.scss']
})
export class OrderCallModalComponent {
  @Output() onFormSubmit: EventEmitter<null> = new EventEmitter<null>();
  protected name: FormControl = new FormControl('', Validators.required);
  protected number: FormControl = new FormControl('', Validators.required);
  protected model: FormControl = new FormControl();
  protected whatsWrong: FormControl = new FormControl();
  protected form: FormGroup = new FormGroup({
    name: this.name,
    number: this.number,
    model: this.model,
    whatsWrong: this.whatsWrong
  });

  constructor(private backend: BackendService) {
  }

  protected onSubmit(): void {
    this.backend.orderCall(this.form.value.name, this.form.value.number, this.form.value.model, this.form.value.whatsWrong).subscribe();
    this.onFormSubmit.emit();
  }
}
