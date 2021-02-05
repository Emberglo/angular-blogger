import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdisplayComponent } from './component/blogdisplay/blogdisplay.component'
import { AboutComponent } from './pages/about/about.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: BlogdisplayComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'post', component: BlogPostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'post/:id', component: BlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
