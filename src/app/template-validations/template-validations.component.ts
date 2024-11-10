import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { mustNotMatchDirective } from './mustNotMatch.directive';
import { UniqueRoleDirective } from './unique-role.directive';

@Component({
  selector: 'app-template-validations',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    mustNotMatchDirective,
    UniqueRoleDirective,
  ],
  templateUrl: './template-validations.component.html',
  styleUrl: './template-validations.component.css',
})
export class TemplateValidationsComponent {
  actor = {
    name: '',
    role: '',
  };
}
