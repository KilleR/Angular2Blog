import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptActivityComponent } from './crypt-activity.component';

describe('CryptActivityComponent', () => {
  let component: CryptActivityComponent;
  let fixture: ComponentFixture<CryptActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
