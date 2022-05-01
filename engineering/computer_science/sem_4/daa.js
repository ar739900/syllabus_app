module.exports = course = {
    outline:
        'Hands-on experiments related to the course contents of PCC CS 404.',
    objecttives: [
        '• Analyze the asymptotic performance of algorithms. • Write rigorous correctness proofs for algorithms. \n• Demonstrate a familiarity with major algorithms and data structures. \n• Apply important algorithmic design paradigms and methods of analysis. \n• Synthesize efficient algorithms in common engineering design situations.',
    ],
    name: 'Design and Analysis of Algorithms and Design and Analysis of Algorithms Lab',
    code: 'PCC CS 404 & PCC CS 404P ',
    credits: 5,
    content: [
        {
            module: '1',
            topics: 'Introduction: Characteristics of algorithm. Analysis of algorithm: Asymptotic analysis of complexity bounds – best, average and worst-case behavior; Performance measurements of Algorithm, Time and space trade-offs, Analysis of recursive algorithms through recurrence relations: Substitution method, Recursion tree method and Masters’ theorem.',
        },
        {
            module: '2',
            topics: 'Introduction to Divide and Conquer paradigm: Binary Search, Quick and Merge sorting techniques, linear time selection algorithm, Strassen’s Matrix Multiplication, Karatsuba Algorithm for fast multiplication etc. Introduction to Heap: Min and Max Heap, Build Heap, Heap Sort.',
        },
        {
            module: '3',
            topics: 'Overview of Brute-Force, GreedyProgramming, Dynamic Programming, Branch- and-Bound and Backtrackingmethodologies. Greedy paradigm examples of exact optimization solution: Minimum Cost Spanning Tree, Knapsack problem, Job Sequencing Problem, Huffman Coding, Single source shortest path problem. \nDynamic Programming, difference between dynamic programming and divide and conquer, Applications: Fibonacci Series, Matrix Chain Multiplication, 0-1 Knapsack Problem, Longest Common Subsequence, Travelling Salesman Problem, Rod Cutting, Bin Packing. Heuristics – characteristics and their application domains.',
        },
        {
            module: '4',
            topics: 'Graph and Tree Algorithms:Representational issues in graphs, Traversal algorithms: Depth First Search (DFS) and Breadth First Search (BFS); Shortest path algorithms: BellmanFord algorithm,Dijkstra’s algorithm & Analysis of Dijkstra’s algorithm using heaps, Floyd-Warshall’s all pairs shortest path algorithm.Transitive closure, Topological sorting, Network Flow Algorithm, Connected Component',
        },
        {
            module: '5',
            topics: 'Tractable and Intractable Problems: Computability of Algorithms, Computability classes – P, NP, NP-complete and NP-hard. Cook’s theorem, Standard NP-complete problems and Reduction techniques. Approximation algorithms, Randomized algorithms',
        },
    ],
    books: [
        { name: 'Introduction to Algorithms, 4th Edition', author: 'Thomas H Cormen, Charles E Lieserson, Ronald L Rivest and Clifford Stein' },
        { name: 'Fundamental of Computer Algorithm', author: 'Galgotia' },
        { name: 'Computer Algorithms: Introduction to Design & Analysis', author: 'Addision Wesley.' },
        { name: 'Algorithm Design, 1st Edition', author: 'Jon Kleinberg and Éva Tardos' },
    ],

    outcomes: [
        '1. For a given algorithms analyze worst-case running times of algorithms based on asymptotic analysis and justify the correctness of algorithms. ',
        '2. Describe the greedy paradigm and explain when an algorithmic design situation calls for it. For a given problem develop the greedy algorithms. ',
        '3. Describe the divide-and-conquer paradigm and explain when an algorithmic design situation calls for it. Synthesize divide-and-conquer algorithms. Derive and solve recurrence relation.',
        '4. Describe the dynamic-programming paradigm and explain when an algorithmic design situation calls for it. For a given problems of dynamic-programming and develop the dynamic programming algorithms, and analyze it to determine its computational complexity.',
        '5. For a given model engineering problem model it using graph and write the corresponding algorithm to solve the problems.',
        '6. Explain the ways to analyze randomized algorithms (expected running time, probability of error).',
        '7. Explain what an approximation algorithm is. Compute the approximation factor of an approximation algorithm (PTAS and FPTAS).',
    ],
};
