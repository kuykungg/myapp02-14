import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-logln',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './logln.component.html',
  styleUrls: ['./logln.component.scss']
})
export class LoglnComponent {
  loginForm!: FormGroup;
  submitted = false;

  userLogin = {
    "email": "",
    "password": ""
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitLogin() {
    this.submitted = true;

    if (this.loginForm.valid) { 
      this.userLogin.email = this.loginForm.value.email;
      this.userLogin.password = this.loginForm.value.password;

      if (this.userLogin.email === "admin@gmail.com" && this.userLogin.password === "123456789") {
        alert("เข้าสู่ระบบ");
      } else {
        alert("ไม่สามารถเข้าสู่ระบบได้");
      }
    }
  }

  resetForm() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
