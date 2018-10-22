import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

    @ViewChild('f') form: NgForm;

    startedEditingSubscription: Subscription;
    editMode = false;
    editItemIndex: number;
    editItem: Ingredient;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
            (index: number) => {
                this.editItemIndex = index;
                this.editMode = true;
                this.editItem = this.shoppingListService.getIngredient(this.editItemIndex);
                this.form.setValue({
                    'name': this.editItem.name,
                    'amount': this.editItem.amount
                })
            }
        );
    }

    onAddItem(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
        } else {
            this.shoppingListService.addIngredient(newIngredient);
        }
    }

    ngOnDestroy() {
        this.startedEditingSubscription.unsubscribe();
    }

}