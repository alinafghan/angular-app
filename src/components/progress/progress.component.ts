import { Component, OnInit } from '@angular/core';
import {
  BrnProgressComponent,
  BrnProgressIndicatorComponent,
} from '@spartan-ng/brain/progress';
import { HlmProgressIndicatorDirective } from '../../../libs/ui/ui-progress-helm/src/index';

@Component({
  selector: 'spartan-progress-preview',
  standalone: true,
  imports: [BrnProgressComponent, BrnProgressIndicatorComponent, HlmProgressIndicatorDirective],
  template: `
    <brn-progress hlm class='w-80' aria-labelledby="loading" [value]="value">
      <brn-progress-indicator hlm />
    </brn-progress>
  `,
})
export class ProgressComponent implements OnInit {
  value = 15;

  ngOnInit() {
    setTimeout(() => (this.value = 65), 3000);
  }
}
