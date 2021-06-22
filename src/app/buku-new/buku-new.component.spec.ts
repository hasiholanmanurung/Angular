import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuNewComponent } from './buku-new.component';

describe('BukuNewComponent', () => {
  let component: BukuNewComponent;
  let fixture: ComponentFixture<BukuNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BukuNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
