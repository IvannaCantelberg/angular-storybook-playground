import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLogo } from './company-logo';

describe('CompanyLogo', () => {
  let component: CompanyLogo;
  let fixture: ComponentFixture<CompanyLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
