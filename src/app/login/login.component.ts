import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  public user:User;
  public warning:string;

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(f: NgForm): void {

    this.auth.login(this.user).subscribe(
      (success) => 
      {

        localStorage.setItem('access_token',success.token);
        this.router.navigate(['/contactus']);
      },

      (err) =>
       {
        this.warning = err.error.message;
      }
    );

  }
}

