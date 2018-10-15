import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) {}
    
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

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    };

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }


}