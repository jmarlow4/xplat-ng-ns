import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@xplat-ng-ns/xplat/web/features';

@Component({
  selector: 'xplat-ng-ns-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
