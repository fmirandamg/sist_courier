import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrRecuperarPassComponent } from './cr-recuperar-pass.component';

describe('CrRecuperarPassComponent', () => {
  let component: CrRecuperarPassComponent;
  let fixture: ComponentFixture<CrRecuperarPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrRecuperarPassComponent]
    });
    fixture = TestBed.createComponent(CrRecuperarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
