import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
<<<<<<< Updated upstream
export class AppComponent implements OnInit {
  email: string;
  password: string;

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(public authService: AuthService, private afs: AngularFirestore) {}

  ngOnInit() {
    this.postsCol = this.afs.collection('posts');
    this.posts = this.postsCol.valueChanges();
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }
}
=======

export class AppComponent {
}
>>>>>>> Stashed changes
