import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from './../shared/data-storage.service';
import { AuthService } from './../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(
        private dataStorageService: DataStorageService, 
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    onSaveRecipes() {
        this.dataStorageService.putRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onFetchRecipes() {
        this.dataStorageService.getRecipes();
    }

    onSignOut() {
        this.authService.signOut();
    }

}
