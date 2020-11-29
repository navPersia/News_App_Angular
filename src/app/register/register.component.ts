import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  invalidRegister : boolean;

  constructor(
    private http: HttpClient,
    public authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signUp(credentials) {
    console.log("worked");
    console.log(credentials);
    this.authService.register(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidRegister = true; 
      });
    }

}
