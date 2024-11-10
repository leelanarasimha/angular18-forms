import { Directive, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { uniqueRoleValidator } from '../actor-form/unique-role.validator';
import { ActorService } from '../actor-form/actor.service';

@Directive({
  selector: '[appUniqueRole]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UniqueRoleDirective,
      multi: true,
    },
  ],
})
export class UniqueRoleDirective implements AsyncValidator {
  actorService = inject(ActorService);
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniqueRoleValidator(this.actorService)(control);
  }
}
