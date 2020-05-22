export * from './calculadora.module';  //deixa isso público, ou seja, no modulo principal(app.mudule.ts) não preciso escrever import { CalculadoraModule } from './calculadora/calculadora.module';     --->  basta isso   --->     import { CalculadoraModule } from './calculadora'; 
export * from './components';
export * from './services';
