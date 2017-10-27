import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { LoginComponent } from "./login/login.component";

import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
