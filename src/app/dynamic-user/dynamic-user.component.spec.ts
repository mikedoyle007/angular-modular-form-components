import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicUserComponent } from './dynamic-user.component';

describe('DynamicUserComponent', () => {
  let component: DynamicUserComponent;
  let fixture: ComponentFixture<DynamicUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
