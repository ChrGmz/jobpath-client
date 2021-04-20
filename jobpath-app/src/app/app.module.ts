import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FirebaseService } from './services/firebase.service';
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';
import { SigninDialogComponent } from './components/signin-dialog/signin-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupDialogComponent,
    SigninDialogComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [
    FirebaseService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
