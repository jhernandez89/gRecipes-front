import { RecipeServiceService } from './../recipe-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
  recipe = {};
  constructor(private recipeServiceService: RecipeServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      console.log("here", params['id']);
      this.recipeServiceService.getRecipe(params['id']).subscribe(recipe => {
        this.recipe = recipe[0];
        console.log(this.recipe);
      })
    });
  }
  ngOnInit() {
  }
}
