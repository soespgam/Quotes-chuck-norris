import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from '../favorites.page';
import { CategoryModule } from 'src/app/components/category/module/category.module';
import { ButtonModule } from 'src/app/components/button/module/button.module';

@NgModule({  
  declarations: [FavoritesPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    CategoryModule,
    ButtonModule
  ]

})
export class FavoritesPageModule {}
