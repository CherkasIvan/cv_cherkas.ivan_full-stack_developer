import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextImageButtonComponent } from './next-image-button.component';

describe('NextImageButtonComponent', () => {
  let component: NextImageButtonComponent;
  let fixture: ComponentFixture<NextImageButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextImageButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NextImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
