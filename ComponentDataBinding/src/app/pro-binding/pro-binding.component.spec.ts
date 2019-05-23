import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBindingComponent } from './pro-binding.component';

describe('ProBindingComponent', () => {
  let component: ProBindingComponent;
  let fixture: ComponentFixture<ProBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
