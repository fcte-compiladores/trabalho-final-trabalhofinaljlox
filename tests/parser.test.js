import { Parser } from '../Parser.js';
import { Token } from '../Token.js';
import { TokenType } from '../TokenType.js';

function createToken(type, lexeme = '', literal = null, line = 1) {
  return new Token(type, lexeme, literal, line);
}

function testLiteralParsing() {
  const tokens = [
    createToken(TokenType.NUMBER, '42', 42),
    createToken(TokenType.EOF)
  ];
  const parser = new Parser(tokens);
  const ast = parser.parse();
  console.assert(ast.value === 42, 'AST deveria conter valor 42');
}

function runAll() {
  testLiteralParsing();
  console.log('✅ parser.test.js passou.');
}

runAll();
