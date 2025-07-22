export const TokenType = {
    // Tokens de um único caractere.
    LEFT_PAREN: 'LEFT_PAREN',
    RIGHT_PAREN: 'RIGHT_PAREN',
    LEFT_BRACE: 'LEFT_BRACE',
    RIGHT_BRACE: 'RIGHT_BRACE',
    COMMA: 'COMMA',
    DOT: 'DOT',
    MINUS: 'MINUS',
    PLUS: 'PLUS',
    SEMICOLON: 'SEMICOLON',
    SLASH: 'SLASH',
    STAR: 'STAR',
  
    // Tokens de um ou dois caracteres.
    BANG: 'BANG',
    BANG_EQUAL: 'BANG_EQUAL',
    EQUAL: 'EQUAL',
    EQUAL_EQUAL: 'EQUAL_EQUAL',
    GREATER: 'GREATER',
    GREATER_EQUAL: 'GREATER_EQUAL',
    LESS: 'LESS',
    LESS_EQUAL: 'LESS_EQUAL',
  
    // Literais.
    IDENTIFIER: 'IDENTIFIER',
    STRING: 'STRING',
    NUMBER: 'NUMBER',
  
    // Palavras-chave.
    AND: 'AND',
    CLASS: 'CLASS',
    ELSE: 'ELSE',
    FALSE: 'FALSE',
    FUN: 'FUN',
    FOR: 'FOR',
    IF: 'IF',
    NIL: 'NIL',
    OR: 'OR',
    PRINT: 'PRINT',
    RETURN: 'RETURN',
    SUPER: 'SUPER',
    THIS: 'THIS',
    TRUE: 'TRUE',
    VAR: 'VAR',
    WHILE: 'WHILE',
  
    EOF: 'EOF' // Fim do arquivo (End Of File)
  };