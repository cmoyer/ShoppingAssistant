import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://images.media-allrecipes.com/userphotos/250x250/1486.jpg'),
    new Recipe('Another Test Recipe', 'This is another test', 'http://images.media-allrecipes.com/userphotos/250x250/1486.jpg')
  ];

  getRecipes() {
    // Use .slice() to return an exact copy of the recipes array rather than returning the actual array.
    return this.recipes.slice();
  }
}
