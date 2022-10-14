import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoPipePipe } from './Pipes/logo-pipe.pipe';
import { AlphabetOnlyDirective } from './directives/alphabet-only.directive';
import { NameLogoPipe } from './Pipes/NameLogoPipe/name-logo.pipe';
import { SearchItemPipe } from './Pipes/NameLogoPipe/search-item.pipe';



@NgModule({
  declarations: [
    LogoPipePipe,
    AlphabetOnlyDirective,
    NameLogoPipe,
    SearchItemPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
