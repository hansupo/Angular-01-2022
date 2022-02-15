import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InimesedComponent } from './inimesed.component';

describe('InimesedComponent', () => {
  let component: InimesedComponent;
  let fixture: ComponentFixture<InimesedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InimesedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InimesedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
