import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bibliotheque';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyDUSz0BqZ6uFBaFrCwnVaxsxVqU0PkptXM",
      authDomain: "bibliotheque-898ee.firebaseapp.com",
      databaseURL: "https://bibliotheque-898ee.firebaseio.com",
      projectId: "bibliotheque-898ee",
      storageBucket: "",
      messagingSenderId: "51445557771",
      appId: "1:51445557771:web:956ef5d357ec1ea0"
    };
    firebase.initializeApp(firebaseConfig);

  }
  
}
