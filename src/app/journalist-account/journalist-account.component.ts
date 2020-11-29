import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-journalist-account',
  templateUrl: './journalist-account.component.html',
  styleUrls: ['./journalist-account.component.css']
})
export class JournalistAccountComponent implements OnInit {
  invalidRegister: boolean;
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(credentials) {
    console.log("worked");
    console.log(credentials);
    this.authService.registerJournalist(credentials)
      .subscribe(result => { 
        if (result)
          this.router.navigate(['/']);
        else  
          this.invalidRegister = true; 
      });
    }

}
