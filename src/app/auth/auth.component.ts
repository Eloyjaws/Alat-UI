import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @ViewChild('container') container;

  signUpClick(){
    this.container.nativeElement.classList.add("right-panel-active");
  }

  signInClick(){
    this.container.nativeElement.classList.remove("right-panel-active");
  }

  goToApp(e){
    e.preventDefault()
    this.router.navigate(['app']);
  }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  signupForm = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.minLength(11)])
  })

  get email(){ return this.loginForm.get('email')};
  get password(){ return this.loginForm.get('password')};
  get phone(){ return this.signupForm.get('phone')};
}
