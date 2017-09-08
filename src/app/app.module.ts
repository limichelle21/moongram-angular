import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import 'firebase/storage';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
