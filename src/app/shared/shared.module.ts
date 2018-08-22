import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, ModalComponent, HighlightDirective],
  exports: [ModalComponent, HeaderComponent, FooterComponent, HighlightDirective]
})
export class SharedModule { }
