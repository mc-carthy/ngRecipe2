import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test description', 'https://cdn.pixabay.com/photo/2017/04/04/00/36/japanese-food-2199962_960_720.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

}
