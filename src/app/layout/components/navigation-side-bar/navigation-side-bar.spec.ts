import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSideBar } from './navigation-side-bar';

describe('NavigationSideBar', () => {
  let component: NavigationSideBar;
  let fixture: ComponentFixture<NavigationSideBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationSideBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSideBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
