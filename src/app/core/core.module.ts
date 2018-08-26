import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { VERSION, constantsService } from './constants';
import { RandomNChars, GeneratorFactory } from './generator';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [],
  providers: [
    { provide: VERSION, useValue: constantsService },
    { provide: RandomNChars, useFactory: GeneratorFactory(6) }
  ]
})
export class CoreModule { }
