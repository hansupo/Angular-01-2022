import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisatudComponent } from './lisatud.component';

describe('LisatudComponent', () => {
  let component: LisatudComponent;
  let fixture: ComponentFixture<LisatudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisatudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisatudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
