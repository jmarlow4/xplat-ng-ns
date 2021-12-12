import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@xplat-ng-ns/xplat/nativescript/features';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
