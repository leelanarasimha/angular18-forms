import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormRecord,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
  rememberMe?: FormControl<boolean>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fb = inject(NonNullableFormBuilder);

  loginForm = this.fb.group({
    email: '',
    password: '',
  });
}
