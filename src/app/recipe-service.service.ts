import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Map } from 'immutable';
import { BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/Rx';

const jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
const authSetDataOptions = new RequestOptions({ headers: jsonHeaders });

@Injectable()
export class RecipeServiceService {


  constructor(private http: Http) { }
  getRecipes() {
    return this.http.get('https://grecipes.herokuapp.com/recipes').map(response => response.json());
  }
  getRecipe(id: number) {
    return this.http.get(`https://grecipes.herokuapp.com/recipes/${id}`).map(response => response.json());
  }
  getReviews() {
    return this.http.get(`https://grecipes.herokuapp.com/reviews`).map(response => response.json());
  }
  getReview(id: number) {
    return this.http.get(`https://grecipes.herokuapp.com/reviews${id}`).map(response => response.json());
  }
  postRecipe(form) {
    return this.http.post(`https://grecipes.herokuapp.com/recipes`, form, authSetDataOptions)
  }
  getIngredients() {
    return this.http.get(`https://grecipes.herokuapp.com/ingredients`).map(response => response.json())
  }

}
