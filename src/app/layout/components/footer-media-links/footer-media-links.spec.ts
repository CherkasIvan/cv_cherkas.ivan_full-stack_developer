import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMediaLinks } from './footer-media-links';

describe('FooterMediaLinks', () => {
  let component: FooterMediaLinks;
  let fixture: ComponentFixture<FooterMediaLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMediaLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMediaLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
