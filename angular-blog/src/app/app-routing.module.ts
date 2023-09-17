import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ContentdoisComponent } from './pages/contentdois/contentdois.component';
import { ContenttresComponent } from './pages/contenttres/contenttres.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  {
    path:'contentdois/: id',
    component:ContentdoisComponent
  },
  {
    path:'contenttres/: id',
    component:ContenttresComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
