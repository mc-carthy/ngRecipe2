import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe: Recipe;
    id: number;

    constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

    ngOnInit() {
        // const id = +this.route.snapshot.queryParams['id'];
        // this.recipe = this.recipeService.getRecipe(id);
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id']
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        );
    }

    onAddToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
    }

    onDeleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }

}
