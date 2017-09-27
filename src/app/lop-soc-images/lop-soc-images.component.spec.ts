import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LopSocImagesComponent } from './lop-soc-images.component';

describe('LopSocImagesComponent', () => {
  let component: LopSocImagesComponent;
  let fixture: ComponentFixture<LopSocImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LopSocImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LopSocImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
