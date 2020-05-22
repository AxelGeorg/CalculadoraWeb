
/**
 *Serviço responsavel por executar as operações da calculadora
 *
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {


  /*Define as constantes(readonly->somente leitura) utilizadas para
  identificar as operações do cálculo*/
  static readonly SOMA: string = "+";
  static readonly SUBTRACAO: string = "-";
  static readonly DIVISAO: string = "/";
  static readonly MULTILICACAO: string = "*";

  constructor() { }
  /**
   * Método que calcula uma operação dado
   * dois números
   * Suporta as operações: soma, subtração, divisão e
   * multiplicação.
   * 
   * @param n1 number 
   * @param n2 number
   * @param operacao string Operação a ser executada
   * @return number Resultado da operação
   */
  calcular(n1: number, n2: number, operacao: string): number { //Esse método retorna um numero
    let resultado: number;  //armazena o resultado da operação

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = n1 + n2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = n1 - n2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = n1 / n2;
        break;
      case CalculadoraService.MULTILICACAO:
        resultado = n1 * n2;
        break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
