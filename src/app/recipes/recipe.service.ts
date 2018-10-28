import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    constructor(private shoppingListService: ShoppingListService) {}
    
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

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

}