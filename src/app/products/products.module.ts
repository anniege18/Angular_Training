import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductService} from "./services/product.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, ProductListComponent],
  providers: [ProductService],
  exports: [ProductListComponent]
})
export class ProductsModule { }
