import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule, MatChipsModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatStepperModule, MatTableModule,
  MatTabsModule, MatTreeModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {AppRoutingModule} from '../app-routing.module';
import {MainComponent} from './main/main.component';
import {LessontableComponent} from './lessontable/lessontable.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LessontabComponent} from './lessontab/lessontab.component';
import {LessoncontainComponent} from './lessoncontain/lessoncontain.component';
import {QuestionComponent} from './question/question.component';
import {StudenttableComponent} from './studenttable/studenttable.component';
import {RegistertableComponent} from './registertable/registertable.component';
import {HomeworkComponent} from './homework/homework.component';
import {CharpterlistComponent} from './charpterlist/charpterlist.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeworkdesigmComponent} from './homeworkdesigm/homeworkdesigm.component';
import {GlobalModule} from './global/global.module';
import {LessoncardComponent} from './lessoncard/lessoncard.component';
import {ChapterdialogComponent} from './chapterdialog/chapterdialog.component';
import {SectiondialogComponent} from './sectiondialog/sectiondialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    LessontableComponent,
    LessontabComponent,
    LessoncontainComponent,
    QuestionComponent,
    StudenttableComponent,
    RegistertableComponent,
    HomeworkComponent,
    CharpterlistComponent,
    HomeworkdesigmComponent,
    LessoncardComponent,
    ChapterdialogComponent,
    SectiondialogComponent
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
    MatChipsModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    GlobalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChapterdialogComponent, SectiondialogComponent]
})
export class AppModule {
}
