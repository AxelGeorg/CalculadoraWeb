import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalculadoraComponent
      ],
      providers: [    //serviços
        CalculadoraService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  it('deve garantir que 35 + 7 = 42', () => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));//passa o id #...
    let btn5 = fixture.debugElement.query(By.css('#btn5'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btn7 = fixture.debugElement.query(By.css('#btn7'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    btn3.triggerEventHandler('click', null);//simula o click do usuário
    fixture.detectChanges();//pede para atualizaar e verificar se ocorreu algo, nesse caso para detectar o click

    btn5.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn7.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('42');
  });
});
