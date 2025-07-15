import { Interpreter } from './Interpreter.js';
import { Parser } from './Parser.js';
import { Scanner } from './Scanner.js';
import { TokenType } from './TokenType.js';
import fs from 'fs';
import readline from 'readline';

export class Lox {
  static hadError = false;
  static hadRuntimeError = false;
  static interpreter = new Interpreter();

  static main(args) {
    if (args.length > 1) {
      console.log('Usage: node Lox.js [script]');
      process.exit(64);
    } else if (args.length === 1) {
      this.runFile(args[0]);
    } else {
      this.runPrompt();
    }
  }

  static runFile(path) {
    const source = fs.readFileSync(path, 'utf8');
    this.run(source);
    if (this.hadError) process.exit(65);
    if (this.hadRuntimeError) process.exit(70);
  }

  static runPrompt() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> '
    });

    rl.prompt();

    rl.on('line', (line) => {
      this.run(line);
      this.hadError = false; // Não mate a sessão interativa por um erro.
      rl.prompt();
    });
  }

  static run(source) {
    const scanner = new Scanner(source);
    const tokens = scanner.scanTokens();
    const parser = new Parser(tokens);
    const expression = parser.parse();

    if (this.hadError) return;

    this.interpreter.interpret(expression);
  }

  static error(line, message) {
    this.report(line, '', message);
  }

  static runtimeError(error) {
    console.error(`[line ${error.token.line}] ${error.message}`);
    this.hadRuntimeError = true;
  }

  static tokenError(token, message) {
    if (token.type === TokenType.EOF) {
      this.report(token.line, ' at end', message);
    } else {
      this.report(token.line, ` at '${token.lexeme}'`, message);
    }
  }

  static report(line, where, message) {
    console.error(`[line ${line}] Error${where}: ${message}`);
    this.hadError = true;
  }
}