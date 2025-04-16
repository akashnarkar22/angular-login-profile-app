import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth service/auth.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {
  user: any;
  error: any;

  constructor(private http: HttpClient, private auth: AuthService) {}
  ngOnInit() {
    const token = this.auth.getToken();  // Get token from AuthService 
    if (!token) {
      console.error('No token found!');
      return;
    }
  
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get('https://dummyjson.com/auth/me', { headers }).subscribe({
      next: (res) => {
        this.user = res;  //   fetched Data
        console.log('Profile fetched:', res);
      },
      error: (err) => {
        console.error('Failed to fetch profile:', err);
        this.error = 'Failed to fetch profile. Token might be expired or invalid.';
      }
    });
  }
  logout() {
    this.auth.logout();
  }
}
