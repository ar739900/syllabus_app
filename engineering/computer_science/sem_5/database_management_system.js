module.exports = course = {
    outline:
        'Hands-on experiments related to the course contents of PCC CS 501.',
    objecttives: [
        '1. To understand the different issues involved in the design and implementation of a database system.\n2. To study the physical and logical database designs, database modeling, relational, hierarchical, and network models\n3. To understand and use data manipulation language to query, update, and manage a database\n4. To develop an understanding of essential DBMS concepts such as: database security, integrity, concurrency, distributed database, and intelligent database, Client/Server (Database Server), Data Warehousing.\n5. To design and build a simple database system and demonstrate competence with the fundamental tasks involved with modeling, designing, and implementing a DBMS.',
    ],
    name: 'Database Management Systems\nDatabase Management Systems Lab',
    code: 'PCC CS 501 & PCC CS 501P',
    credits: 5,
    content: [
        {
            module: '1',
            topics: 'Database system architecture: Data Abstraction, Data Independence, Data Definition Language (DDL), Data Manipulation Language (DML).\nData models: Entity-relationship model, network model, relational and object oriented data models, integrity constraints, data manipulation operations.',
        },
        {
            module: '2',
            topics: 'Relational query languages: Relational algebra, Tuple and domain relational calculus, SQL3, DDL and DML constructs, Open source and Commercial DBMS - MYSQL, ORACLE, DB2, SQL server.\nRelational database design: Domain and data dependency, Armstrong’s axioms, Normal forms, Dependency preservation, Lossless design.\nQuery processing and optimization: Evaluation of relational algebra expressions, Query equivalence, Join strategies, Query optimization algorithms.',
        },
        {
            module: '3',
            topics: 'Storage strategies: Indices, B-trees, hashing.',
        },
        {
            module: '4',
            topics: 'Transaction processing: Concurrency control, ACID property, Serializability of scheduling, Locking and timestamp based schedulers, Multi-version and optimistic Concurrency Control schemes, Database recovery.',
        },
        {
            module: '5',
            topics: 'Database Security: Authentication, Authorization and access control, DAC, MAC and RBAC models, Intrusion detection, SQL injection.',
        },
        {
            module: '6',
            topics: 'Advanced topics: Object oriented and object relational databases, Logical databases, Web databases, Distributed databases, Data warehousing and data mining',
        },
    ],
    books: [
        { name: 'Database Management System Concepts”, 6th Edition', author: 'Abraham Silberschatz, Henry F. Korth, S. Sudarshan,' },
        { name: '“Principles of Database and Knowledge – Base Systems”, Vol 1 ', author: 'J. D. Ullman' },
        { name: ' “Fundamentals of Database Systems”, 5th Edition ', author: ' R. Elmasri and S. Navathe' },
    ],

    outcomes: [
        '1. For a given query write relational algebra expressions for that query and optimize the developed expressions',
        '2. For a given specification of the requirement design the databases using E‐R method and normalization.',
        '3. For a given specification construct the SQL queries for Open source and Commercial DBMS -MYSQL, ORACLE, and DB2.',
        '4. For a given query optimize its execution using Query optimization algorithms',
        '5. For a given transaction-processing system, determine the transaction atomicity, consistency, isolation, and durability.',
        '6. Implement the isolation property, including locking, time stamping based on concurrency control and Serializability of scheduling.'
    ],
};
