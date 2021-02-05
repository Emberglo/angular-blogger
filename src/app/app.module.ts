import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { BlogdisplayComponent } from './component/blogdisplay/blogdisplay.component';
import { BlogPreviewComponent } from './component/blog-preview/blog-preview.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AuthButtonComponent } from './auth/auth-button/auth-button.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogdisplayComponent,
    BlogPreviewComponent,
    BlogPostComponent,
    AuthButtonComponent,
    UserProfileComponent,
    ProfileComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'emberglo.us.auth0.com',
      clientId: 'tC31XoaYNwEc91ggl5b4Aag5Qw2TqtU3'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
