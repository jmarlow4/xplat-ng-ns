import { environmentBase } from './environment.base';
import { IEnvironment } from '@xplat-ng-ns/xplat/core';
import { environmentProd } from '@xplat-ng-ns/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});
