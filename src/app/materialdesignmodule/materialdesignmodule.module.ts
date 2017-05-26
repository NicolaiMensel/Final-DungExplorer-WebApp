import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCard, MdCardModule, MdInputModule, MdMenuModule, MdSnackBar, MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdMenuModule,
    MdSnackBarModule,
    MdCardModule,
    MdMenuModule

  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdMenuModule,
    MdSnackBarModule,
    MdCardModule,
    MdMenuModule
  ]
})
export class MaterialdesignmoduleModule { }
