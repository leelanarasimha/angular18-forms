import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  favoriteColorControl = new FormControl('');

  constructor() {
    this.favoriteColorControl.valueChanges.subscribe((color) => {
      console.log('new Favorite color ' + color);
    });
  }

  changeColor() {
    this.favoriteColorControl.setValue('Red');
  }
}
