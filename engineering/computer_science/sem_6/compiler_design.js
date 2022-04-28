module.exports = course = {
    outline:
        '',
    objecttives: [
        ' To understand and list the different stages in the process of compilation. \n Identify different methods of lexical analysis \n Design top-down and bottom-up parsers \n Identify synthesized and inherited attributes \n Develop syntax directed translation schemes \n Develop algorithms to generate code for a target machine \n To study the underlying theories in designing of a compiler \n The study especially consider the imperative languages ',
    ],
    name: 'Compiler Design',
    code: 'PCC CS 601',
    credits: 5,
    content: [
        {
            module: '1',
            topics: 'Introduction: Phases of compilation and overview.\n Lexical Analysis (scanner): Regular languages, finite automata, regular expressions, from regular expressions to finite automata, scanner generator (lex, flex).',
        },
        {
            module: '2',
            topics: 'Syntax Analysis (Parser): Context-free languages and grammars, push-down automata, LL(1) grammars and top-down parsing, operator grammars, LR(O), SLR(1), LR(1), LALR(1) grammars and bottom-up parsing, ambiguity and LR parsing, LALR(1) parser generator (yacc, bison). ',
        },
        {
            module: '3',
            topics: 'Semantic Analysis: Attribute grammars, syntax directed definition, evaluation and flow of attribute in a syntax tree.\n Symbol Table: Its structure, symbol attributes and management. Run-time environment: Procedure activation, parameter passing, value return, memory allocation, and scope. ',
        },
        {
            module: '4',
            topics: 'ntermediate Code Generation: Translation of different language features, different types of intermediate forms. \n Code Improvement (optimization) Analysis: control-flow, data-flow dependence etc.; Code improvement local optimization, global optimization, loop optimization, peep-hole optimization etc. \n Architecture dependent code improvement: instruction scheduling (for pipeline), loop optimization (for cache memory) etc. Register allocation and target code generation. ',
        },
        {
            module: '5',
            topics: 'Advanced topics: Type systems, data abstraction, compilation of Object Oriented features and non-imperative programming languages. ',
        },
    ],
    books: [
        { name: ' Compilers Principles Techniques And Tools', author: 'Alfred V. Aho, Ravi Sethi, Jeffery D. Ullman' },
        { name: 'Compiler Design', author: 'Santanu Chattopadhyay' },
        { name: 'Modern Compiler Design', author: 'Dick Grune, E. Bal. Ceriel, J. H. Jacobs, and Koen G. Langendoen, Viley Dreamtech' },
    ],

    outcomes: [
        '1. Develop the lexical analyser for a given grammar specification. ',
        '2. Design top-down and bottom-up parsers for a given parser specification ',
        '3. Develop syntax directed translation schemes ',
        '4. Develop algorithms to generate code for a target machine',
    ],
};
