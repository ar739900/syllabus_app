module.exports = course = {
    outline:
        'Hands-on experiments related to the course contents of PCC CS 301.',
    objecttives: [
        '1. To impart the basic concepts of data structures and algorithms.\n2. To understand concepts about searching and sorting techniques.\n3. To understand basic concepts about stacks, queues, lists, trees and graphs.\n4. To enable them to write algorithms for solving problems with the help of fundamental data structures',
    ],
    name: 'Data Structure & Algorithms and Data Structure & Algorithms Lab',
    code: 'PCC CS 301 & PCC CS 301P',
    credits: 5,
    content: [
        {
            module: '1',
            topics: 'Introduction: Basic Terminologies: Elementary Data Organizations, Data Structure Operations: insertion, deletion, traversal etc.; Analysis of an Algorithm, Asymptotic Notations, Time-Space trade off',
        },
        {
            module: '2',
            topics: 'Stacks and Queues: ADT Stack and its operations: Algorithms and their complexity analysis, Applications of Stacks: Expression Conversion and evaluation – corresponding algorithms and complexity analysis. ADT queue, Types of Queue: Simple Queue, Circular Queue, Priority Queue; Operations on each Type of Queues: Algorithms and their analysis.',
        },
        {
            module: '3',
            topics: 'Linked Lists: Singly linked lists: Representation in memory, Algorithms of several operations: Traversing, Searching, Insertion into, Deletion from linked list; Linked representation of Stack and Queue, Header nodes, doubly linked list: operations on it and algorithmic analysis; Circular Linked Lists: all operations their algorithms and the complexity analysis.',
        },
        {
            module: '4',
            topics: 'Searching, Sorting and Hashing: Linear Search and Binary Search Techniques and their complexity analysis. Objective and properties of different sorting algorithms: Selection Sort, Bubble Sort, Insertion Sort, Quick Sort, Merge Sort, Heap Sort; Performance and Comparison among all the methods, Hashing.',
        },
        {
            module: '5',
            topics: 'Trees: Basic Tree Terminologies, Different types of Trees: Binary Tree, Threaded Binary Tree, Binary Search Tree, AVL Tree; Tree operations on each of the trees and their algorithms with complexity analysis. Applications of Binary Trees. B Tree, B+ Tree: definitions, algorithms and analysis. Graph: Basic Terminologies and Representations, Graph search and traversal algorithms and complexity analysis',
        },
    ],
    books: [
        { name: 'Algorithms, Data Structures, and Problem Solving with C++', author: 'Mark Allen Weiss' },
        { name: 'How to Solve it by Computer”, 2nd Impression', author: 'R.G. Dromey' },
        { name: 'Fundamentals of Data Structures, Illustrated Edition', author: 'Ellis Horowitz, Sartaj Sahni' },
    ],

    outcomes: [
        '1. For a given algorithm student will able to analyze the algorithms to determine the time and computation complexity and justify the correctness.',
        '2. For a given Search problem (Linear Search and Binary Search) student will able to implement it.',
        '3. For a given problem of Stacks, Queues and linked list student will able to implement it and analyze the same to determine the time and computation complexity.',
        '4. Student will able to write an algorithm Selection Sort, Bubble Sort, Insertion Sort, Quick Sort, Merge Sort, Heap Sort and compare their performance in term of Space and Time complexity.',
        'dent will able to implement Graph search and traversal algorithms and determine the time and computation complexity',
    ],
};
