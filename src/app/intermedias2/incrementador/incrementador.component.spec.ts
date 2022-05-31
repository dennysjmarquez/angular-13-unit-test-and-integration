import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IncrementadorComponent} from './incrementador.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe de mostrar la leyenda', () => {
    const Leyenda = 'Progress';
    component.leyenda = Leyenda;
    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(elem.innerHTML).toContain(Leyenda);
  });

  it('Debe de mostrar en el input el valor del progreso', async () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    await fixture.whenStable().then(() => {
      const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(input.value).toBe('55');
    });
  });

  it('Debe de incrementar/decrementar en 5, con un clic en el botón', () => {
    const buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('.btn-primary'));

    buttons[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);
    buttons[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('Debe de reflejarse el valor del progreso en el HTML tras hacer clic en los botones, incrementar/decrementar', async () => {
    const buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('.btn-primary'));
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    buttons[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(elem.innerHTML).toContain('45');
    });

    buttons[1].triggerEventHandler('click', null);
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(elem.innerHTML).toContain('50');
    });
  });
});
