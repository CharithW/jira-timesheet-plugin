import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

// import { AuthenticatorService } from "../_services/authenticator.service";
// import { ErrorBrokerService } from "../_services/error-broker.service";

// import { User } from "../_models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private errorText: string;
  atlassionCred = { space: "", username: "", password: "" };

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {}

  formSubmit(): void {
    console.log(this.atlassionCred);
    this.authService
      .fetchUser(this.atlassionCred)
      .subscribe(data => console.log(data));
  }

  clicked() {
    this.router.navigate(["register"]);
  }
}
