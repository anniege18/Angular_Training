import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { ColorByTextDirective } from './directives/color-by-text/color-by-text.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    CapitalizePipe,
    HighlightDirective,
    ColorByTextDirective
  ],
  exports: [
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    CapitalizePipe,
    HighlightDirective,
    ColorByTextDirective
  ]
})
export class SharedModule { }
