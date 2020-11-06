import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http:HttpClient) { }

  getQuoteRandom(){
    return this.http.get(environment.endpoints.categoriesRandom);
  }

  getQuoteEspecific(category: string){
    return this.http.get(`${environment.endpoints.category}${category}`);
  }



}
