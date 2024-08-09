import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicanComponent } from './mexican.component';

describe('MexicanComponent', () => {
  let component: MexicanComponent;
  let fixture: ComponentFixture<MexicanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MexicanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MexicanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
