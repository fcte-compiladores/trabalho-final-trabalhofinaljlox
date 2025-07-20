import { Literal, Binary, Grouping, Unary } from '../Expr.js';
import { Token } from '../Token.js';
import { TokenType } from '../TokenType.js';

const dummyToken = new Token(TokenType.MINUS, '-', null, 1);

function testLiteralAccept() {
  const lit = new Literal(42);
  const visitor = { visitLiteralExpr: (expr) => expr.value };
  const result = lit.accept(visitor);
  console.assert(result === 42, `Literal deveria aceitar visitor e retornar 42`);
}

function testUnaryAccept() {
  const expr = new Unary(dummyToken, new Literal(3));
  const visitor = {
    visitUnaryExpr: (expr) => `(${expr.operator.lexeme} ${expr.right.value})`
  };
  const result = expr.accept(visitor);
  console.assert(result === '(- 3)', `Unary deveria gerar '(- 3)', retornou ${result}`);
}

function runAll() {
  testLiteralAccept();
  testUnaryAccept();
  console.log('✅ expr.test.js passou.');
}

runAll();
