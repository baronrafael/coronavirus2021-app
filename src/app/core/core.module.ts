import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

/* const COMPONENTS = [
  
] */

@NgModule({
  declarations: [/* ...COMPONENTS */],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HttpClientModule
    /* ...COMPONENTS */
  ]
})
export class CoreModule { }
