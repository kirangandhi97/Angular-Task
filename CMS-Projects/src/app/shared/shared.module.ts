import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoPipePipe } from './Pipes/logo-pipe.pipe';
import { AlphabetOnlyDirective } from './directives/alphabet-only.directive';



@NgModule({
  declarations: [
    LogoPipePipe,
    AlphabetOnlyDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
