import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-change-password',
  imports: [ FormsModule, MatButtonModule, MatCardModule, MatInputModule, ReactiveFormsModule ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.less'
})
export class ChangePasswordComponent {

  changePasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl(''),
    newPassword: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    console.log(this.changePasswordForm.value);
  }
}
