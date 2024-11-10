import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { mustNotMatchValidator } from '../actor-form/mustNotMatch.validator';

@Directive({
  selector: '[appmustNotMatch]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, useExisting: mustNotMatchDirective, multi: true },
  ],
})
export class mustNotMatchDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return mustNotMatchValidator(control);
  }
}
