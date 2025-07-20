import { Scanner } from '../Scanner.js';
import { TokenType } from '../TokenType.js';

function testSingleToken() {
  const scanner = new Scanner('+');
  const tokens = scanner.scanTokens();
  console.assert(tokens[0].type === TokenType.PLUS, 'Token esperado: PLUS');
}

function testNumberToken() {
  const scanner = new Scanner('123');
  const tokens = scanner.scanTokens();
  console.assert(tokens[0].type === TokenType.NUMBER, 'Token esperado: NUMBER');
  console.assert(tokens[0].literal === 123, 'Valor literal esperado: 123');
}

function testStringToken() {
  const scanner = new Scanner('"ok"');
  const tokens = scanner.scanTokens();
  console.assert(tokens[0].type === TokenType.STRING, 'Token esperado: STRING');
  console.assert(tokens[0].literal === 'ok', 'Valor literal esperado: "ok"');
}

function runAll() {
  testSingleToken();
  testNumberToken();
  testStringToken();
  console.log('✅ scanner.test.js passou.');
}

runAll();
