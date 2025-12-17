import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoSetup } from './duo-setup';

describe('DuoSetup', () => {
  let component: DuoSetup;
  let fixture: ComponentFixture<DuoSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuoSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuoSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
