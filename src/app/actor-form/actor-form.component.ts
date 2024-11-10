import { Component, signal } from '@angular/core';
import { Actor } from './actor';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { forbiddenNameDirective } from './forbidden-name.directive';
import { forbiddenNameValidator } from './forbidden-name.validator';
import { mustNotMatchValidator } from './mustNotMatch.validator';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css',
})
export class ActorFormComponent {
  actorForm = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/leela/i),
      ]),
      role: new FormControl(''),
      skill: new FormControl('', Validators.required),
    },
    { validators: [mustNotMatchValidator] }
  );

  get name() {
    return this.actorForm.controls.name;
  }

  get skill() {
    return this.actorForm.get('skill');
  }
}
