import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-order-call-modal-content',
  templateUrl: './order-call-modal-content.component.html',
  styleUrls: ['./order-call-modal-content.component.scss']
})
export class OrderCallModalContentComponent {
  @Output() formSubmitted: EventEmitter<null> = new EventEmitter<null>();
}
