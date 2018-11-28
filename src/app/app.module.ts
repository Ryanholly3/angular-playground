import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { BikesComponent } from './bikes/bikes.component';

const appRoutes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'bikes' component: BikesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    BikesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
