import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { QuotePageRoutingModule } from './quote-routing.module';
import { QuotePage } from '../quote.page';
import { QuoteModule } from 'src/app/components/quote/module/quote.module';

@NgModule({
  declarations: [QuotePage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotePageRoutingModule,
    QuoteModule
  ]
  
})
export class QuotePageModule {}
