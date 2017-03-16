import { RecipeServiceService } from './../recipe-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes;
  pageTitle = 'Page Title';
  constructor(private recipeServiceService: RecipeServiceService) {
    this.recipeServiceService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  ngOnInit() {
  }
}