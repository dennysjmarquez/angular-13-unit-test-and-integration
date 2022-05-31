import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {IncrementadorComponent} from './incrementador.component';

describe('Incremendator Component unit', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('No debe de pasar de 100 el progreso', () => {
    component.cambiarValor(5000);
    expect(component.progreso).toBe(100);
  });
});
