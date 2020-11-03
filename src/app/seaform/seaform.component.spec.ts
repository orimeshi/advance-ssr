import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaformComponent } from './seaform.component';

describe('SeaformComponent', () => {
  let component: SeaformComponent;
  let fixture: ComponentFixture<SeaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
