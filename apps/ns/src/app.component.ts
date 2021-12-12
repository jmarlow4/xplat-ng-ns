import { Component } from '@angular/core';
import { AppService } from '@xplat-ng-ns/xplat/nativescript/core';
import { AppBaseComponent } from '@xplat-ng-ns/xplat/nativescript/features';

@Component({
  selector: 'xplat-ng-ns-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `,
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
