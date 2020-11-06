import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from '../category.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[
    CategoryComponent
  ]
})
export class CategoryModule { }
