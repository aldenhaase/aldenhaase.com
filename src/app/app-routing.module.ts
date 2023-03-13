import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { LystrComponent } from './lystr/lystr.component';
import { MapComponent } from './map/map.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { DrumsComponent } from './drums/drums.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'keyboard', component: KeyboardComponent},
  {path:'lystr', component: LystrComponent},
  {path:'map', component: MapComponent},
  {path:'resume', component: ResumeComponent},
  {path:'about', component: AboutComponent},
  {path:'drums', component: DrumsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
