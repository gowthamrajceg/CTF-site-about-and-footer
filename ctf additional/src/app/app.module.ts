import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BodyComponent } from './body/body.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PageComponent } from './page/page.component';
import { PythonComponent } from './python/python.component';
import { DjangoComponent } from './django/django.component';
import { JavaComponent } from './java/java.component';
import { NetComponent } from './net/net.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    BodyComponent,
    ContentComponent,
    FooterComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent,
    BlogComponent,
    PageComponent,
    PythonComponent,
    DjangoComponent,
    JavaComponent,
    NetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
