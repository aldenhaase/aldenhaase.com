import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MapComponent } from './map/map.component';
import { LystrComponent } from './lystr/lystr.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { RunwayComponent } from './runway/runway.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DrumsComponent } from './drums/drums.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KeyboardComponent,
    MapComponent,
    LystrComponent,
    ResumeComponent,
    AboutComponent,
    NavComponent,
    RunwayComponent,
    DrumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
