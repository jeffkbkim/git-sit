import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TeamComponent } from './team/team.component';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    TeamComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
