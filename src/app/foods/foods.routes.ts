import {Route} from '@angular/router';
import {FoodListComponent} from './food-list/food-list.component';
import { FoodFoodComponent } from './food-food/food-food.component';

export default [
  {
    path: "food-list",
    component: FoodListComponent
  },
  {
    path: "form",
    component: FoodFoodComponent,
  },
] satisfies Route[];