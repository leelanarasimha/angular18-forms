import { Component, inject, signal } from '@angular/core';
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
import { uniqueRoleValidator } from './unique-role.validator';
import { ActorService } from './actor.service';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css',
})
export class ActorFormComponent {
  actorService = inject(ActorService);
  actorForm = new FormGroup(
    {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/leela/i),
      ]),
      role: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [uniqueRoleValidator(this.actorService)],
        updateOn: 'blur',
      }),
      skill: new FormControl('', Validators.required),
    },
    { validators: [mustNotMatchValidator] }
  );

  get name() {
    return this.actorForm.controls.name;
  }
  get role() {
    return this.actorForm.controls.role;
  }

  get skill() {
    return this.actorForm.get('skill');
  }
}
