import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test description', 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png'),
        new Recipe('Test Recipe', 'Test description', 'https://upload.wikimedia.org/wikipedia/commons/5/58/Korean.food-Yukhoe-02E.jpg'),
    ];

    getRecipes() {
        return this.recipes.slice();
    };


}