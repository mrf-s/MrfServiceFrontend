import {EventEmitter} from "@angular/core";

export interface ClosableModal {
  close: EventEmitter<void>
}
