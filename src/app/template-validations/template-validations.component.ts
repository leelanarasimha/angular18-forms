import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { mustNotMatchDirective } from './mustNotMatch.directive';

@Component({
  selector: 'app-template-validations',
  standalone: true,
  imports: [CommonModule, FormsModule, mustNotMatchDirective],
  templateUrl: './template-validations.component.html',
  styleUrl: './template-validations.component.css',
})
export class TemplateValidationsComponent {
  actor = {
    name: '',
    role: '',
  };
}
