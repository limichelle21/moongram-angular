import { Component } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Moongram';
  subtitle = 'Memories from our first 15 months of marriage around the world.';

  constructor(private fb: FirebaseApp) {
    const imageStorageRef = fb.storage().ref().child('images');
    imageStorageRef.getDownloadURL().then(url => {
      console.log(url)
    });
   }

  images;

}
