import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LopSocImageDetailComponent } from './lop-soc-image-detail.component';

describe('LopSocImageDetailComponent', () => {
  let component: LopSocImageDetailComponent;
  let fixture: ComponentFixture<LopSocImageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LopSocImageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LopSocImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
