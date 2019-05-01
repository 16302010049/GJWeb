import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalService} from '../service/global.service';

export {
  GlobalService
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GlobalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GlobalModule,
      providers: [GlobalService]
    };
  }
}
