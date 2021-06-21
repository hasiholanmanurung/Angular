import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuDetailComponent } from './buku-detail.component';

describe('BukuDetailComponent', () => {
  let component: BukuDetailComponent;
  let fixture: ComponentFixture<BukuDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BukuDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
