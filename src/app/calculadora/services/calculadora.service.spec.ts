import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Testes
   * 
   *Todo teste deve ter a função it
   * 1º parametro =  o que o teste faz  
   * 2º injeta o CalculadoraService, ou seja, pega ele
   * 3º pega o CalculadoraService obtido no parametro anterior e coloca no service,
   * ou seja, cria uma instancia para utiliza-la ali dentro.
   */

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5); // espero que a soma seja igual a 5
    })
  );
  
  it('deve garantir que 1 - 4 = -3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(-3);
    })
  );

  it('deve garantir que 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  );

  it('deve garantir que 2 * 4 = 8',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(2, 4, CalculadoraService.MULTILICACAO);
      expect(multiplicacao).toEqual(8);
    })
  );

  it('deve retornar 0 para operação inválida',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  );
});
