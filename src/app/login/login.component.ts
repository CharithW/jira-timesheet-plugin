import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// import { AuthenticatorService } from "../_services/authenticator.service";
// import { ErrorBrokerService } from "../_services/error-broker.service";

// import { User } from "../_models/user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  //   private user: User;
  private errorText: string;

  constructor(
    // private authenticatorService: AuthenticatorService,
    private router: Router // private errorBroker: ErrorBrokerService
  ) {
    // this.user = new User();
  }

  ngOnInit() {
    // this.errorText = this.errorBroker.getErrorText();
  }

  formSubmit(): void {
    // this.authenticatorService.login(this.user).subscribe(
    //   result => {
    //     this.router.navigate(["/dash"]);
    //   },
    //   error => {
    //     this.errorText = this.errorBroker.getErrorText();
    //   }
    // );
    //TODO contact the authenticator service and pass the USer object
    //TODO get the resopnse, if success; send to dashboard
  }

  clicked() {
    this.router.navigate(["register"]);
  }
}
