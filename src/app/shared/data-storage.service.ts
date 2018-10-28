import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { RecipeService } from './../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
    constructor(
        private http: Http,
        private recipeService: RecipeService
    ) {}

    putRecipes() {
        return this.http.put('https://ngrecipe-25ef8.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        this.http.get('https://ngrecipe-25ef8.firebaseio.com/recipes.json').pipe(map(
        (response: Response) => {
            const recipes: Recipe[] = response.json();
            for (let recipe of recipes) {
                if (!recipe.ingredients) {
                    console.log(recipe);
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        }
        )).subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}