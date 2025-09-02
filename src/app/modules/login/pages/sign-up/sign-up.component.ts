import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [ FormsModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatInputModule, RouterLink, NgIf ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.less'
})
export class SignUpComponent implements OnInit, OnDestroy {

  //#region Variables declaration
  error: string = '';
  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  //#endregion

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.signUpForm.valid) {
      this.router.navigate(['/intranet/admin/dashboard']);
    } else {
      this.signUpForm.markAllAsTouched();
      this.error = 'Please fill in all required fields correctly.';
    }
  }

  ngOnDestroy(): void {
    this.signUpForm.reset();
  }
}
