import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  savePassword: boolean = false;

  constructor(private apiService: ApiService) { }



  onSubmit() {
    this.apiService.login(this.username, this.password).subscribe(
      response => {
        alert('Login successful!');
        console.log('Login successful!', response);
      },
      error => {
        console.error('Login failed!', error);
        alert('Login failed!');
      }
    );
  }

  isInputFocused: boolean = false;

  onInputFocus(): void {
    this.isInputFocused = true;
  }

  onInputBlur(): void {
    this.isInputFocused = false;
  }
}
