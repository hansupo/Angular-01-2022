import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarjutusComponent } from './harjutus.component';

describe('HarjutusComponent', () => {
  let component: HarjutusComponent;
  let fixture: ComponentFixture<HarjutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarjutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarjutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
