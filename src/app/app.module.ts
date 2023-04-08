import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WarningAlert } from './warningalert/warning.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { FormsModule } from '@angular/forms';
import { SecretkeyComponent } from './secretkey/secretkey.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessalertComponent,
    UserinfoComponent,
    SecretkeyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
