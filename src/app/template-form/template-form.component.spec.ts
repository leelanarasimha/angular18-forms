import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update the favorite color in the component', fakeAsync(() => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Red';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.favoriteColor).toEqual('Red');
  }));

  it('should update thefavorite color on the input field', fakeAsync(() => {
    component.favoriteColor = 'Blue';
    fixture.detectChanges();
    tick();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.value).toBe('Blue');
  }));
});
