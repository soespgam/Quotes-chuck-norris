import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { Plugins } from '@capacitor/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
const { Device } = Plugins;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public vaidatorForm: FormGroup

  inputName = {
    type: "text",
    tittle: "Name",
    name: "name"
  }

  inputLastName = {
    type: "text",
    tittle: "Last Name",
    name: "lastName"
  }

  inputEmail = {
    type: "email",
    tittle: "Email",
    name: "email"
  }

  inputPassword = {
    type: "password",
    tittle: "Password",
    name: "password"
  }

  datoButton = {
    text: "Register"
  }

  datoButton2 = {
    text: "Continuar"
  }

  public user: user; 
  public users: user[];

  constructor( private router: Router, private activatedroute: ActivatedRoute) {
    this.user = new user();
    this.users = [];
    this.vaidatorForm = new FormGroup({
      name: new FormControl('', Validators.minLength(3)),
      lastName: new FormControl('',Validators.minLength(3)),
      email:new FormControl('',Validators.email),
      password: new FormControl('',Validators.minLength(2))     
    });
    
  }

  ngOnInit() { }

  async submitForm() {
    const info = await Device.getInfo();
    this.user.uuid = info.uuid;
    this.user.status = true;
    this.user.favorites = [];
    console.log(this.user.favorites)
    this.users.push(this.user);
    localStorage.setItem("userReg", JSON.stringify(this.users));
    this.user = new user();
    console.log(this.users);
  }

 async continuar() {
    const info = await Device.getInfo();
    this.user.uuid = info.uuid;
    this.user.status = true;
    this.user.favorites = [];
    console.log(this.user.favorites)
    localStorage.setItem("userLog", JSON.stringify(this.user));
    this.router.navigate(["/categories"]);
  }

  validateName(name){
    this.user.name = name;
    this.vaidatorForm.controls.name.setValue(this.user.name);
  }

  validateLastName(lastName){
    this.user.lastName = lastName;
    this.vaidatorForm.controls.lastName.setValue(this.user.lastName);
  }

  validateEmail(email){
    this.user.email = email;
    this.vaidatorForm.controls.email.setValue(this.user.email);
  }

  validatePassword(password){
    this.user.password = password;
    this.vaidatorForm.controls.password.setValue(this.user.password);
  }

  conG(){
    console.log("GROUP", this.vaidatorForm)
  }
} 
