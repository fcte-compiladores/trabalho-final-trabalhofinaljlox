import { Binary, Literal } from '../Expr.js';
import { Interpreter } from '../Interpreter.js';
import { Token } from '../Token.js';
import { TokenType } from '../TokenType.js';

function createToken(type, lexeme = '', literal = null, line = 1) {
  return new Token(type, lexeme, literal, line);
}

function testTypeMismatchError() {
  const interpreter = new Interpreter();

  const expr = new Binary(
    new Literal(1),
    createToken(TokenType.PLUS),
    new Literal("string")
  );

  try {
    interpreter.evaluate(expr);
    console.assert(false, 'Deveria lançar erro de tipo');
  } catch (e) {
    console.log('✅ runtime error de tipo capturado.');
  }
}

function runAll() {
  testTypeMismatchError();
}

runAll();
