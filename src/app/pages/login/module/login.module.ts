import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from '../login.page';
import { InputModule } from 'src/app/components/input/module/input.module';
import { ButtonModule } from 'src/app/components/button/module/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ButtonModule,
    InputModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
