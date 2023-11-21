import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrRegistroComponent } from './cr-registro.component';

describe('CrRegistroComponent', () => {
  let component: CrRegistroComponent;
  let fixture: ComponentFixture<CrRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrRegistroComponent]
    });
    fixture = TestBed.createComponent(CrRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
