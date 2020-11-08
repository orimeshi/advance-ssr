import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyformComponent } from './beautyform.component';

describe('BeautyformComponent', () => {
  let component: BeautyformComponent;
  let fixture: ComponentFixture<BeautyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeautyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeautyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
