export class Token {
    constructor(type, lexeme, literal, line) {
      this.type = type;       // Tipo do token (ex: TokenType.NUMBER)
      this.lexeme = lexeme;   // O texto do token no código (ex: "123")
      this.literal = literal; // O valor real do token (ex: o número 123)
      this.line = line;       // A linha onde o token aparece
    }
  
    toString() {
      return `${this.type} ${this.lexeme} ${this.literal}`;
    }
  }