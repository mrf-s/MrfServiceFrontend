import {Component, Input, TemplateRef} from '@angular/core';
import {asString} from "../../helpers/helpers";

@Component({
  selector: 'app-string-or-template',
  templateUrl: './string-or-template.component.html',
  styleUrls: ['./string-or-template.component.scss']
})
export class StringOrTemplateComponent {
  @Input() value?: string | TemplateRef<any>;

  protected valueAsString(): string | undefined {
    return asString(this.value);
  }

  protected valueAsTemplate(): TemplateRef<any> | undefined {
    if (this.valueAsString() !== undefined) {
      return undefined;
    }

    return this.value as TemplateRef<any>;
  }
}
