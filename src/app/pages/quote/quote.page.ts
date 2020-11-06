import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuoteService } from './service/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit, OnDestroy {
  public randomObservable: any;
  inputQuote = {
    category: " Random",
    text: ""
  }
  constructor(private router: Router, private quoteService: QuoteService, private route: ActivatedRoute) { }

  ngOnInit() {

    const name = this.route.snapshot.paramMap.get('name');

    if (name == 'null' || name == null) {
      this.random();
    } else {
      let userFavorites = JSON.parse(localStorage.getItem("userLog")).favorites;
      let Favorites = [];
      for (let i = 0; i < userFavorites.length; i++) {
        if (userFavorites[i].status == true) {
          Favorites.push(userFavorites[i]);
        }
      }
      let category = Favorites[this.getRandomArbitrary(0,Favorites.length)] ;
      this.inputQuote.category = category.name;
      this.byCategory();
    }
  }
  
  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  random() {
    let ob = this.quoteService.getQuoteRandom().subscribe(
      res => {
        this.inputQuote.text = res['value'];
        ob.unsubscribe();
      },
      error => {
        alert("ERROR SERVICIO" +  error);
      }
    )
  }

  byCategory() {
    let obCategory = this.quoteService.getQuoteEspecific(this.inputQuote.category).subscribe(
      res => {
        this.inputQuote.text = res['value'];
        obCategory.unsubscribe();
      },
      error => {
        alert("ERROR SERVICIO" +  error);
      }
    );
  }
  regresar() {
    this.router.navigate(["/favorites"]);
  }

  logout() {
    this.router.navigate(["/login"]);
    localStorage.removeItem("userLog");
  }

  ngOnDestroy(){
      
  }
}
