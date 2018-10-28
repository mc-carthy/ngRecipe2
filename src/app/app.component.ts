import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    ngOnInit() {
        firebase.initializeApp({
            apiKey: "AIzaSyAsn5iBSMo55qqFwkjantYfdSJZtutJSDM",
            authDomain: "ngrecipe-25ef8.firebaseapp.com"
        });
    }
}
