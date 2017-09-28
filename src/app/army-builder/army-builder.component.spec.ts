import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyBuilderComponent } from './army-builder.component';

describe('ArmyBuilderComponent', () => {
  let component: ArmyBuilderComponent;
  let fixture: ComponentFixture<ArmyBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmyBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmyBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
