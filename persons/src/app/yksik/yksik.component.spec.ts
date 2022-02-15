import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksikComponent } from './yksik.component';

describe('YksikComponent', () => {
  let component: YksikComponent;
  let fixture: ComponentFixture<YksikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YksikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YksikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
