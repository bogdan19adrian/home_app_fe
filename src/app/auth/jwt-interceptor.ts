import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // check if the current user is logged in
    // tslint:disable-next-line:max-line-length
    // if the user making the request is logged in, he will have JWT token in it's local storage, which is set by Authorization Service during login process
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      // clone the incoming request and add JWT token in the cloned request's Authorization Header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    // handle any other requests which went unhandled
    return next.handle(request);
  }
}
