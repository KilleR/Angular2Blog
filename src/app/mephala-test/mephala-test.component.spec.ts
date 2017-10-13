import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MephalaTestComponent } from './mephala-test.component';

describe('MephalaTestComponent', () => {
  let component: MephalaTestComponent;
  let fixture: ComponentFixture<MephalaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MephalaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MephalaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
