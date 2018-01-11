import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NameComponent } from './name/name.component';
import { AgeComponent } from './age/age.component';
import { AddressComponent } from './address/address.component';
import { CountyComponent } from './address/county/county.component';
import { StateComponent } from './address/state/state.component';
import { DynamicUserComponent } from './dynamic-user/dynamic-user.component';
import { UserArrayComponent } from './user-array/user-array.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NameComponent,
    AgeComponent,
    AddressComponent,
    CountyComponent,
    StateComponent,
    DynamicUserComponent,
    UserArrayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
