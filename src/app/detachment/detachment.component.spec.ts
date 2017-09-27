import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachmentComponent } from './detachment.component';

describe('DetachmentComponent', () => {
  let component: DetachmentComponent;
  let fixture: ComponentFixture<DetachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
