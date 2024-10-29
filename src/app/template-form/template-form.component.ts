import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  @ViewChild('colorInput') colorInputModel!: NgModel;
  favoriteColor = '';

  ngAfterViewInit() {
    console.log(this.colorInputModel);
    this.colorInputModel.valueChanges?.subscribe((data) => {
      console.log(data);
    });
  }

  updateColor() {
    this.favoriteColor = 'red';
  }
}
