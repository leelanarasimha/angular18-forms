import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  roles = ['hero', 'villain'];

  isRoleTaken(role: string) {
    return of(this.roles.includes(role)).pipe(delay(1000));
  }
}
