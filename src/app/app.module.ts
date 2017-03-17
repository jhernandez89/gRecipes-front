import { RecipeServiceService } from './recipe-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { router } from './app.router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CourseComponent } from './courses.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { AboutComponent } from './about/about.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselComponent,
    RecipeListComponent,
    CourseComponent,
    SingleRecipeComponent,
    AboutComponent,
    AddRecipeComponent,
    EditRecipeComponent,
  ],
  imports: [
    router,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [RecipeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }