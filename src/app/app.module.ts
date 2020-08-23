import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { ProjectsComponent } from './main/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MainComponent,
    AboutMeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
