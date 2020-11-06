import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[
    ButtonComponent
  ]
})
export class ButtonModule { }
