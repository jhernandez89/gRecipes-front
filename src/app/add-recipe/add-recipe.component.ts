import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipe;
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

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
        ingredients: this.fb.array([this.fb.control('')]),
        steps: this.fb.array([this.fb.control('')]),
      });
  }
  addIngredient() {
    const control = <FormArray>this.recipe.controls['ingredients'];
    control.push(this.fb.control(''));
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