import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArrayComponent } from './user-array.component';

describe('UserArrayComponent', () => {
  let component: UserArrayComponent;
  let fixture: ComponentFixture<UserArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
