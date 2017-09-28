import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetachmentSectionComponent } from './detachment-section.component';

describe('DetachmentSectionComponent', () => {
  let component: DetachmentSectionComponent;
  let fixture: ComponentFixture<DetachmentSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetachmentSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetachmentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
