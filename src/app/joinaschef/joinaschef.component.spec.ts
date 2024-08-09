import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinaschefComponent } from './joinaschef.component';

describe('JoinaschefComponent', () => {
  let component: JoinaschefComponent;
  let fixture: ComponentFixture<JoinaschefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoinaschefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinaschefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
