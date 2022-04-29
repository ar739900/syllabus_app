module.exports = course = {
    outline:
        '',
    objecttives: [
        '\n Understand the broader context of Artificial Intelligence\n Develop a basic understanding of the building blocks of AI such as intelligent agents, search, inference, logic, and learning.\n Learn core concepts in artificial intelligence, such as heuristic search, game playing, formal logic, knowledge representation, knowledge discovery, decision theory, machine learning, and natural language processing.',
    ],
    name: 'Artificial Intelligence',
    code: 'PCC CS 503',
    credits: 3,
    content: [
        {
            module: '1',
            topics: 'Introduction: Overview, Turing test, Intelligent agents. Problem Solving: Solving Problems by Searching: Uninformed search - Depth First Search, Breadth First Search, DFID, Heuristic search - Generate and Test, Best First Search, Beam Search, Hill Climbing, A*, Problem reduction search – AND/OR Graphs, AO*, Constraint satisfaction, Means-ends analysis, Stochastic search methods - Simulated Annealing, Particle Swarm Optimization, Game Playing - Minimax algorithm, Alpha-beta PerformanceResourceTiming.',
        },
        {
            module: '2',
            topics: 'Knowledge and Reasoning: Building a knowledge base - Propositional logic, first order logic, Inference in first order logic, Resolution – refutation proofs, Theorem Proving in First Order Logic; Planning, partial order planning, Uncertain Knowledge and Reasoning, Probabilities, Bayesian Networks',
        },
        {
            module: '3',
            topics: 'Learning: Overview of different forms of learning: unsupervised, supervised, semisupervised, K-means clustering algorithm, Decision Trees, Neural Networks, Deep Learning. ',
        },
        {
            module: '4',
            topics: 'Advanced topics: Introduction to Computer Vision, Natural Language Processing, Expert Systems, Robotics, Genetic Algorithm, ',
        },
    ],
    books: [
        { name: '“Artificial Intelligence: A Modern Approach', author: 'S. Russell and P. Norvig' },
        { name: ' “Artificial Intelligence”', author: 'E. Rich, K. Knight and S. B. Nair' },
        { name: '“Pattern Recognition and Machine Learning" ', author: 'C. Bishop' },
        { name: '“Introduction to artificial intelligence and expert systems” ', author: 'D. W. Patterson' },
    ],

    outcomes: [
        ' Build intelligent agents for search and games',
        ' Solve AI problems through programming with Python',
        ' Learning optimization and inference algorithms for model learning',
        ' Design and develop programs for an agent to learn and act in a structured environment.',
    ],
};
