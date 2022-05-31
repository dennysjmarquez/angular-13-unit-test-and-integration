import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HospitalComponent} from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalComponent],
    });
    // Esto ya no es necesario, angular ya implementa a Webpack, mo importa si se deja o quita
    // .compileComponents();

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
