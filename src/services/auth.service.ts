import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable, Subject } from 'rxjs'; // Import Observable for HTTP calls
import { User } from '../interfaces/user'; 
import { environment } from '../environments/environment';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.BACKEND_URL}/auth/login`;
  private fbLoginUrl = `${environment.BACKEND_URL}/auth/fblogin`;

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  fblogin(){
      window.location.href = this.fbLoginUrl; // Redirects user to backend for login
    }
}
