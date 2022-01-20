import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "courses", component: CoursesComponent},
  {path: "hobbies", component: HobbiesComponent},
  {path: "work", component: WorkComponent},
  {path: "**", component: PageNotFoundComponent},
  
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
