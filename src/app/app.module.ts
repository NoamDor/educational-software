import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { QAndAComponent } from './q-and-a/q-and-a.component';
import { TrainingComponent } from './training/training.component';
import { TrainingStartComponent } from './training/training-start/training-start.component';
import { TrainingTheoryComponent } from './training/training-theory/training-theory.component';
import { ClosedQuestionComponent } from './training/closed-question/closed-question.component';
import { OpenQuestionComponent } from './training/open-question/open-question.component';
import { TrainingEndComponent } from './training/training-end/training-end.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    CoursesComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    QAndAComponent,
    TrainingComponent,
    TrainingStartComponent,
    TrainingTheoryComponent,
    ClosedQuestionComponent,
    OpenQuestionComponent,
    TrainingEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
