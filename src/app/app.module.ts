import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatStepperModule,
  MatTabsModule, MatTreeModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { MainComponent } from './main/main.component';
import { LessontableComponent } from './lessontable/lessontable.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LessontabComponent } from './lessontab/lessontab.component';
import { LessoncontainComponent } from './lessoncontain/lessoncontain.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    LessontableComponent,
    LessontabComponent,
    LessoncontainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatTabsModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatTreeModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
