import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButton} from "@angular/material/button";
@Component({
  selector: 'app-food-food',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButton],
  templateUrl: './food-food.component.html',
  styleUrl: './food-food.component.scss'
})
export class FoodFoodComponent {
  name = new FormControl([Validators.maxLength(20), Validators.required]);

  public showValue() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    } else if (this.name.hasError('maxLength')) {
      return 'Minimo 20 caracteres'
    }
    return 'Error';
  }

  public changeValue(): void {
    // this.name.setValue('Pizza de queso')
  }

}
