import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';

interface User {
  name: FormControl<string>;
  age: FormControl<number>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css',
})
export class UserLoginComponent {
  fb = inject(FormBuilder);

  userLoginForm = new UntypedFormGroup({
    name: new UntypedFormControl(),
    age: new UntypedFormControl(),
    email: new UntypedFormControl(),
  });

  ngOnInit() {
    this.userLoginForm.controls['age'].valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const age = this.userLoginForm.get('age')?.value;
  }

  updateValues() {
    this.userLoginForm.setValue({
      name: 'dsdsd',
      age: 23,
      email: 'dsdsd',
    });
  }
}
