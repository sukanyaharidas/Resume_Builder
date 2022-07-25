import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Template1Component } from './template1/template1.component';
import { Form1Component } from './form1/form1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalDetailsComponent } from './form1/personal-details/personal-details.component';
import { EducationDetailsComponent } from './form1/education-details/education-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WorkexperienceComponent } from './form1/workexperience/workexperience.component';
import { SkillsComponent } from './form1/skills/skills.component';
import { HobbiesComponent } from './form1/hobbies/hobbies.component';
import { Template4Component } from './template4/template4.component';
import { AdminUIComponent } from './admin-ui/admin-ui.component';
import { UserUIComponent } from './user-ui/user-ui.component';
import { LoggedINheaderComponent } from './logged-inheader/logged-inheader.component';
import { AvatarModule } from 'ngx-avatar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    Template1Component,
    Form1Component,
    PersonalDetailsComponent,
    EducationDetailsComponent,
    WorkexperienceComponent,
    SkillsComponent,
    HobbiesComponent,
    Template4Component,
    AdminUIComponent,
    UserUIComponent,
    LoggedINheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    AvatarModule,
    MatProgressBarModule,
    MatToolbarModule

   
  ],
  exports: [
    MatStepperModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
