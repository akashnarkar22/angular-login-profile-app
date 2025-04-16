import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'token';  // store token

  constructor(private http: HttpClient, private router: Router,private toastr:ToastrService) {}

  login(credentials: any): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', credentials);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);  // Save accessToken
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);  // Retrieve accessToken
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);  // Remove token
    this.router.navigate(['/login']);
    this.toastr.error('Logout', 'Error');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();  // Returns true if token exists
  }
}
