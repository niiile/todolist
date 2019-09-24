import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// sopra i moduli standard importati da angular
// moduli che occorrono per l'interazione con firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// Credenziali di accesso a Firebase
import { firebaseConfig } from './firebaseconfig';
@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   FormsModule,
   HttpClientModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFirestoreModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }