import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PageComponent } from './page/page.component';
import { CoursesComponent } from './courses/courses.component';
import { PythonComponent } from './python/python.component';
import { DjangoComponent } from './django/django.component';
import { JavaComponent } from './java/java.component';
import { NetComponent } from './net/net.component';

const routes: Routes = [{
  path : 'login', component : LoginComponent
},{
  path : 'signup', component : SignupComponent
},{
  path : 'body' , component : BodyComponent
},{
  path : 'contact' , component : ContactComponent
},{
  path : 'about' , component : AboutComponent
},{
  path : 'blog' , component : BlogComponent
},{
  path : 'page' , component : PageComponent
},{
  path : 'courses' , component : CoursesComponent
},{
  path : 'python' , component : PythonComponent
},{
  path : 'django' , component : DjangoComponent
},{
  path : 'java' , component : JavaComponent
},{
  path : 'networks' , component : NetComponent
},{
  path : '**' , component : BodyComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
