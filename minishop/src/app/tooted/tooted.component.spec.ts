import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TootedComponent } from './tooted.component';

describe('TootedComponent', () => {
  let component: TootedComponent;
  let fixture: ComponentFixture<TootedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TootedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TootedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
