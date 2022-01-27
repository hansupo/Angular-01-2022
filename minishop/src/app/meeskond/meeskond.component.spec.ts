import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeeskondComponent } from './meeskond.component';

describe('MeeskondComponent', () => {
  let component: MeeskondComponent;
  let fixture: ComponentFixture<MeeskondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeeskondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeeskondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
