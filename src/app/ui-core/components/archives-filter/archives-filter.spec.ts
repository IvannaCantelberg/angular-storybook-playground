import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesFilter } from './archives-filter';

describe('ArchivesFilter', () => {
  let component: ArchivesFilter;
  let fixture: ComponentFixture<ArchivesFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivesFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(ArchivesFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
