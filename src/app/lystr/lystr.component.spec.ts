import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LystrComponent } from './lystr.component';

describe('LystrComponent', () => {
  let component: LystrComponent;
  let fixture: ComponentFixture<LystrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LystrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LystrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
