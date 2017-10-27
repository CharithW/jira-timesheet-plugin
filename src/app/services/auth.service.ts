import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  fetchUser(userCred) {
    console.log(userCred);
    const authBase64 = btoa(`${userCred.username}:${userCred.password}`);

    console.log(btoa(authBase64));

    const headers = new Headers({ Authorization: `Basic ${authBase64}` });
    console.log(headers);
    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(`${userCred.space}/rest/api/2/myself`, options)
      .map((res: Response) => res.json());
  }
}
