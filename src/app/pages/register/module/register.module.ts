import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from '../register.page';
import { ButtonModule } from 'src/app/components/button/module/button.module';
import { InputModule } from 'src/app/components/input/module/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ButtonModule,
    InputModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {

}
