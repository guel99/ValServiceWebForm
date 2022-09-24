import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationRequestComponent } from './components/validation-request/validation-request.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { SafeHtmlPipe } from 'src/app/pipes/safeHtmlPipe';
import { PolicyRequestComponent } from './components/policy-request/policy-request.component';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { ContainerConstraintsComponent } from './components/policy-request/container-constraints/container-constraints.component';

import { MatInputModule } from '@angular/material/input';
import { LevelConstraintComponent } from './components/common/level-constraint/level-constraint.component';
import { MultiValuesConstraintComponent } from './components/common/multi-values-constraint/multi-values-constraint.component';
import { SignatureConstraintsComponent } from './components/policy-request/signature-constraints/signature-constraints.component';
import { ConstraintsComponent } from './components/policy-request/constraints/constraints.component';
import { TimeConstraintComponent } from './components/common/time-constraint/time-constraint.component';

import {MatSelectModule} from '@angular/material/select';
import { ValueConstraintComponent } from './components/common/value-constraint/value-constraint.component';
import { CryptographicConstraintComponent } from './components/common/cryptographic-constraint/cryptographic-constraint.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationRequestComponent,
    SafeHtmlPipe,
    PolicyRequestComponent,
    MainToolbarComponent,
    ContainerConstraintsComponent,
    LevelConstraintComponent,
    MultiValuesConstraintComponent,
    SignatureConstraintsComponent,
    ConstraintsComponent,
    TimeConstraintComponent,
    ValueConstraintComponent,
    CryptographicConstraintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
