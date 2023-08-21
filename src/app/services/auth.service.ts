import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44387/api/auth/';
  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(this.apiUrl + 'login', loginModel);
  }

  isAuth() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
