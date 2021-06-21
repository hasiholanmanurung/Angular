import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelangganDetailComponent } from './pelanggan-detail.component';

describe('PelangganDetailComponent', () => {
  let component: PelangganDetailComponent;
  let fixture: ComponentFixture<PelangganDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelangganDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelangganDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
