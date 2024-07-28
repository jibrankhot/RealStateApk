import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertyfyToastService } from 'src/app/Services/alertyfy-toast.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private alertyfy: AlertyfyToastService,
    private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  onlogin(loginForm: NgForm) {
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      setTimeout(() => {
        this.alertyfy.success('Success:Login was Successful');
        loginForm.reset();
        this.router.navigate(['home']);
      }, 200);
    } else {
      this.alertyfy.error('error: Incorrect Username or Password ');
    }
  }

  BlankuserName() {
    this.toastr.error('Please Enter Name', 'Error');
  }
}
