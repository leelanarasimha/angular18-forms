import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update the value of the input field', () => {
    const input = fixture.nativeElement.querySelector('input');

    const event = new Event('input');
    input.value = 'Red';
    input.dispatchEvent(event);

    expect(component.favoriteColorControl.value).toEqual('Red');
  });

  it('should update the value in the control', () => {
    component.favoriteColorControl.setValue('Blue');

    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('Blue');
  });
});
