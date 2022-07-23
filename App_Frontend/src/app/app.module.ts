import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';
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
import { ChooseTemmplateComponent } from './choose-temmplate/choose-temmplate.component';
import { Template3Component } from './template3/template3.component';
import { Template2Component } from './template2/template2.component';
import { SignupComponent } from './signup/signup.component';
// import { ResumePreviewComponent } from './resume-preview/resume-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    Template1Component,
    Form1Component,
    ChooseTemmplateComponent,
    Template3Component,
    Template2Component,
    SignupComponent
    // ResumePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatStepperModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
