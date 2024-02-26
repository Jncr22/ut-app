import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, TitleCasePipe} from "@angular/common";
import { Food } from '../../shared/food.model';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe, TitleCasePipe],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  @Input() food?: Food;

}
