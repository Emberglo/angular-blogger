import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BlogdisplayComponent } from './component/blogdisplay/blogdisplay.component';
import { BlogPreviewComponent } from './component/blog-preview/blog-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogdisplayComponent,
    BlogPreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
