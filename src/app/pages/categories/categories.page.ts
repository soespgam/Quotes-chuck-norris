import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { CategoriesService } from './service/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  datoButton = {
    text: "Continuar"
  }

  datoButton2 = {
    text: "omitir"
  }

  public category: Object[];
  
  constructor(private serviceCategories: CategoriesService, private router: Router, private activatedroute: ActivatedRoute) {
    this.category = [];
  }

  ngOnInit() {
    this.serviceCategories.getCategories().subscribe(
      res => {
        console.log(res);
        for (let i = 0; i < res.length; i++) {
          this.category[i] = { name: res[i], status: false }
        }
        console.log(this.category);
      },
      error => {
        console.log("error")
      }

    )
  }

  cambioBoolean(i,item){
    this.category.splice(i,1,item);
    let userLog = JSON.parse(localStorage.getItem("userLog"));
    let userReg = JSON.parse(localStorage.getItem("userReg"));

    userLog.favorites = this.category
    console.log(this.category)
    localStorage.setItem("userLog", JSON.stringify(userLog));

    for(let user of userReg){
      if(user.uuid === userLog.uuid){
        user.favorites = userLog.favorites;
      }
    }
    localStorage.setItem("userReg",JSON.stringify(userReg));
  }



  irFavoritos(){
    this.router.navigate(["/favorites"]);
  }

  omitir(){
    this.router.navigate(["/quote"]);
  }

}
