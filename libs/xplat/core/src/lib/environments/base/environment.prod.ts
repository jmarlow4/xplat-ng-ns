import { IEnvironment } from '@xplat-ng-ns/xplat/core';
import { deepMerge } from '@xplat-ng-ns/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
