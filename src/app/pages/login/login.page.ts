import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
    text: "Login"
  }

  public email: string;
  public password: string;

  constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    
  }

  Login() {
    let userLog = JSON.parse(localStorage.getItem("userReg"));
 
    for (let item of userLog) {
      if (item.email === this.email && item.password === this.password) {
        localStorage.setItem("userLog", JSON.stringify(item));
        console.log(userLog);
        if(item.favorites.length > 0){
          this.router.navigate(["/quote", { name:'userLogueado' }]);
        }else{
          this.router.navigate(["/categories"]);
        }
        
      } else {
        console.log("usuario o contraseña incorrecta , intente de nuevo")
        this.email = "";
        this.password ="";
      }
    }
  }
}
