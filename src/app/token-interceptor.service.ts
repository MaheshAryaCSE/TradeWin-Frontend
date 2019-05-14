import { Injectable,Injector } from '@angular/core';
import { AuthService } from './services/auth.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector : Injector) { }
intercept(req,next){
  let authService = this._injector.get(AuthService)
  let tokenizeReq = req.clone({
    setHeaders:{
      'x-access-token':`${authService.getToken()}`
    }
  });
  return next.handle(tokenizeReq)
}
}

