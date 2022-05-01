module.exports = course = {
    outline:
        '********',
    objecttives: [
        '1. Use mathematically correct terminology and notation.\n2. Construct correct direct and indirect proofs.\n3. Use division into cases in a proof.\n4. Use counterexamples.\n5. Apply logical reasoning to solve a variety of problems.',
    ],
    name: 'Discrete Mathematics',
    code: 'PCC CS 401',
    credits: 4,
    content: [
        {
            module: '1',
            topics: "Sets, Relation and Function: Operations and Laws of Sets, Cartesian Products, Binary Relation, Partial Ordering Relation, Equivalence Relation, Image of a Set, Sum and Product of Functions, Bijective functions, Inverse and Composite Function, Size of a Set, Finite and infinite Sets, Countable and uncountable Sets, Cantor's diagonal argument and The Power Set theorem, Schroeder-Bernstein theorem.",
        },
        {
            module: '2',
            topics: 'Principles of Mathematical Induction: The Well-Ordering Principle, Recursive definition, The Division algorithm: Prime Numbers, The Greatest Common Divisor: Euclidean Algorithm, The Fundamental Theorem of Arithmetic.Basic counting techniques-inclusion and exclusion, pigeon-hole principle, permutation and combination.',
        },
        {
            module: '3',
            topics: 'Propositional Logic: Syntax, Semantics, Validity and Satisfiability, Basic Connectives and Truth Tables, Logical Equivalence: The Laws of Logic, Logical Implication, Rules of Inference, The use of Quantifiers. Proof Techniques: Some Terminology, Proof Methods and Strategies, Forward Proof, Proof by Contradiction, Proof by Contraposition, Proof of Necessity and Sufficiency.',
        },
        {
            module: '4',
            topics: 'Algebraic Structures and Morphism: Algebraic Structures with one Binary Operation, Semi Groups, Monoids, Groups, Congruence Relation and Quotient Structures, Free and Cyclic Monoids and Groups, Permutation Groups, Substructures, Normal Subgroups, Algebraic Structures with two Binary Operation, Rings, Integral Domain and Fields. Boolean Algebra and Boolean Ring, Identities of Boolean Algebra, Duality, Representation of Boolean Function, Disjunctive and Conjunctive Normal Form',
        },
        {
            module: '5',
            topics: 'Graphs and Trees: Graphs and their properties, Degree, Connectivity, Path, Cycle, Sub Graph, Isomorphism, Eulerian and Hamiltonian Walks, Graph Coloring, Coloring maps and Planar Graphs, Coloring Vertices, Coloring Edges, List Coloring, Perfect Graph, definition properties and Example, rooted trees, trees and sorting, weighted trees and prefix codes, Bi-connected component and Articulation Points, Shortest distances.',
        },
    ],
    books: [
        { name: 'Discrete Mathematics and its Applications', author: ' Kenneth H. Rosen' },
        { name: 'Discrete Mathematics with Applications', author: 'Susanna S. Epp' },
        { name: 'Elements of Discrete Mathematics A Computer Oriented Approach', author: '. C L Liu and D P Mohapatra' },
        { name: '', author: '' },
    ],

    outcomes: [
        '1. For a given logic sentence express it in terms of predicates, quantifiers, and logical connectives',
        '2. For a given a problem, derive the solution using deductive logic and prove the solution based on logicalinference.',
        '3. For a given a mathematical problem, classify its algebraic structure',
        '4. Evaluate Boolean functions and simplify expressions using the properties of Boolean algebra.',
        '5. Develop the given problem as graph networks and solve with techniques of graph theory.',
    ],
};
