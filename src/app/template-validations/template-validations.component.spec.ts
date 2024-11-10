import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateValidationsComponent } from './template-validations.component';

describe('TemplateValidationsComponent', () => {
  let component: TemplateValidationsComponent;
  let fixture: ComponentFixture<TemplateValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateValidationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
