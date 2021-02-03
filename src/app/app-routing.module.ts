import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdisplayComponent } from './component/blogdisplay/blogdisplay.component'

const routes: Routes = [
  {path: '', component: BlogdisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
