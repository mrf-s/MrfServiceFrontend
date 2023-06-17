import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-order-call-modal-content',
  templateUrl: './order-call-modal-content.component.html',
  styleUrls: ['./order-call-modal-content.component.scss']
})
export class OrderCallModalContentComponent {
  @Output() closed: EventEmitter<null> = new EventEmitter<null>();
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
    this.closed.emit();
  }
}
