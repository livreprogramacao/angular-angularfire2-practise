import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;

  constructor(db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.items = db.list('/items');
    this.user = afAuth.authState;
  }
  title = 'app Using AngularFire2 works!';


  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
