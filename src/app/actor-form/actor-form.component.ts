import { Component, signal } from '@angular/core';
import { Actor } from './actor';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { forbiddenNameDirective } from './forbidden-name.directive';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [CommonModule, FormsModule, forbiddenNameDirective],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css',
})
export class ActorFormComponent {
  actor = {
    name: '',
  };
}
