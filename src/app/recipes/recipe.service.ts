import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'Test description', 
            'https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png',
            [
                new Ingredient('Test ingredient 1', 5),
                new Ingredient('Test ingredient 2', 5),
            ]
        ),
        new Recipe(
            'Test Recipe', 
            'Test description', 
            'https://upload.wikimedia.org/wikipedia/commons/5/58/Korean.food-Yukhoe-02E.jpg',
            [
                new Ingredient('Test ingredient 3', 5),
                new Ingredient('Test ingredient 4', 5),
            ]
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    };


}