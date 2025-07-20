import { Binary, Literal } from '../Expr.js';
import { Interpreter } from '../Interpreter.js';
import { Token } from '../Token.js';
import { TokenType } from '../TokenType.js';

const interpreter = new Interpreter();

function createToken(type, lexeme = '', literal = null, line = 1) {
  return new Token(type, lexeme, literal, line);
}

function testBinaryExpression() {
  const expr = new Binary(
    new Literal(2),
    createToken(TokenType.PLUS, '+'),
    new Literal(3)
  );
  const result = interpreter.evaluate(expr);
  console.assert(result === 5, `2 + 3 deveria ser 5, retornou ${result}`);
}

function testStringConcat() {
  const expr = new Binary(
    new Literal("foo"),
    createToken(TokenType.PLUS, '+'),
    new Literal("bar")
  );
  const result = interpreter.evaluate(expr);
  console.assert(result === "foobar", `Concatenação deveria ser 'foobar', retornou ${result}`);
}

function testComparison() {
  const expr = new Binary(
    new Literal(10),
    createToken(TokenType.GREATER),
    new Literal(5)
  );
  const result = interpreter.evaluate(expr);
  console.assert(result === true, `10 > 5 deveria ser true, retornou ${result}`);
}

function runAll() {
  testBinaryExpression();
  testStringConcat();
  testComparison();
  console.log('✅ interpreter.test.js passou.');
}

runAll();
