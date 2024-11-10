import { inject } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { ActorService } from './actor.service';
import { catchError, map, of } from 'rxjs';

export function uniqueRoleValidator(
  actorService: ActorService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return actorService.isRoleTaken(control.value).pipe(
      map((isTaken) => (isTaken ? { uniqueRole: true } : null)),
      catchError((error) => of(null))
    );
  };
}
