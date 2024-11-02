import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormComponent,
    TemplateFormComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    UserLoginComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular18-forms';
}
