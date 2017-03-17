import { RecipeServiceService } from './../recipe-service.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

recipe: FormGroup;
myArray = ['sugar', 'eggs', 'sup']
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private recipeServiceService: RecipeServiceService) { }

  ngOnInit() {
      this.recipe = this.fb.group({
        recipes: this.fb.group({
          body: '',
          title: '',
        }),
        users: this.fb.group({
          name: '',
          email: '',
        }),
        ingredients: this.fb.array([]),
        steps: this.fb.array([]),
      });
      this.recipeServiceService.getRecipe(1).subscribe(currentRecipe => {
        console.log(currentRecipe);
        this.recipe.patchValue({
          recipes: {
            body: currentRecipe[0].body,
            title: currentRecipe[0].title
          },
        });
      });
      this.recipeServiceService.getIngredients().subscribe(ingredients => {
        ingredients;
      });
  }
  addIngredient(input = '') {
    const control = <FormArray>this.recipe.controls['ingredients'];
    control.push(this.fb.control(input));
    this.cd.markForCheck();
  }
  removeIngredient(i) {
    const control = <FormArray>this.recipe.controls['ingredients'];
    control.removeAt(i);
    this.cd.markForCheck();
  }
  addStep() {
    const control = <FormArray>this.recipe.controls['steps'];
    control.push(this.fb.control(''));
    this.cd.markForCheck();
  }
  removeStep(i) {
    const control = <FormArray>this.recipe.controls['steps'];
    control.removeAt(i);
    this.cd.markForCheck();
  }

  saveForm(form: FormGroup) {
    console.log('form!', form.value);
  }
}
