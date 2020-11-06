import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  
  datoButton = {
    text: "omitir"
  }

  public favorites: object[];
  public categoryStatus: boolean;


  constructor(private router: Router, private activatedroute: ActivatedRoute) {
    this.favorites = [];
    this.getFavorites();
  }

  ngOnInit() {
  }

  getFavorites() {
    this.favorites = JSON.parse(localStorage.getItem("userLog")).favorites;
  }

  addFavorites(i, item) {
    this.favorites.splice(i, 1, item);
    let userLog = JSON.parse(localStorage.getItem("userLog"));
    console.log(userLog)
    userLog.favorites = this.favorites
    localStorage.setItem("userLog", JSON.stringify(userLog));
  }

  getQuotesCat(name: string) {
    this.router.navigate(["/quote", { name }]);
  }

  omitir(){
    this.router.navigate(["/quote"]);
  }

  logout(){
    this.router.navigate(["/login"]);
    localStorage.removeItem("userLog");
  }
  

}
