import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementrefComponent } from './elementref.component';

describe('ElementrefComponent', () => {
  let component: ElementrefComponent;
  let fixture: ComponentFixture<ElementrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
