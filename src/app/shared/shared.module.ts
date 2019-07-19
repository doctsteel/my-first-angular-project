import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  // 3 coisa pode ser declaradas no shared: pipes, components e interfaces
  declarations: [ CapitalizePipe ],
  exports: [ CapitalizePipe ]
})
export class SharedModule { }
