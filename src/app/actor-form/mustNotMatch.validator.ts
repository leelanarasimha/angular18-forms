import { AbstractControl, ValidationErrors } from '@angular/forms';

export function mustNotMatchValidator(
  group: AbstractControl
): ValidationErrors | null {
  const name = group.get('name')?.value;
  const role = group.get('role')?.value;

  if (name && role && name === role) {
    return { mustNotMatch: true };
  }
  return null;
}
