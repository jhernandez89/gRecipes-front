import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AboutComponent } from './about/about.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipe/:id', component: SingleRecipeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
];


export const router = RouterModule.forRoot(routes);
