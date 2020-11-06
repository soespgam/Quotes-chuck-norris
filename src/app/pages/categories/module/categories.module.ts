import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesService } from '../service/categories.service';
import { CategoriesPage } from '../categories.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoryModule } from 'src/app/components/category/module/category.module';
import { ButtonModule } from 'src/app/components/button/module/button.module';


@NgModule({
  declarations: [CategoriesPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesRoutingModule,
    CategoryModule,
    ButtonModule
  ],
  providers:[CategoriesService]
})
export class CategoriesModule { }
