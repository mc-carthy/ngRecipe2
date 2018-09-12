import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test description', 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Indonesian_Food.png'),
        new Recipe('Test Recipe', 'Test description', 'https://upload.wikimedia.org/wikipedia/commons/5/58/Korean.food-Yukhoe-02E.jpg'),
    ];

    constructor() { }

    ngOnInit() {
    }

}
