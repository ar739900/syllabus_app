module.exports = course = {
    outline:
        'Hands-on experiments related to the course contents of PCC CS 402.',
    objecttives: [
        '1. How Computer Systems work & the basic principles.\n2. Instruction Level Architecture and Instruction Execution.\n3. The current state of art in memory system design.\n4. How I/O devices are accessed and its principles.\n5. To provide the knowledge on Instruction Level Parallelism.\n6. To impart the knowledge on microprogramming.\n7. Concepts of advanced pipelining techniques.',
    ],
    name: 'Computer Organization & Architecture and Computer Organization & Architecture Lab',
    code: 'PCC CS 402 & PCC CS 402P',
    credits: 5,
    content: [
        {
            module: '1',
            topics: 'Functional blocks of a computer: CPU, memory, input-output subsystems, control unit. Instruction set architecture of a CPU–registers, instruction execution cycle, RTL interpretation of instructions, addressing modes, instruction set. Case study – instruction sets of some common CPUs. \nData representation: signed number representation, fixed and floating point representations, character representation. Computer arithmetic – integer addition and subtraction, ripple carry adder, carry look-ahead adder, etc. multiplication – shift-and-add, Booth multiplier, carry save multiplier, etc. Division restoring and non-restoring techniques, floating point arithmetic.',
        },
        {
            module: '2',
            topics: 'Introduction to x86 architecture. CPU control unit design: hardwired and microprogrammed design approaches, Case study – design of a simple hypothetical CPU. Memory system design: semiconductor memory technologies, memory organization.\nPeripheral devices and their characteristics: Input-output subsystems, I/O device interface, I/O transfers–program controlled, interrupt driven and DMA, privileged and nonprivileged instructions, software interrupts and exceptions. Programs and processes–role of interrupts in process state transitions, I/O device interfaces – SCII, USB.',
        },
        {
            module: '3',
            topics: 'Pipelining: Basic concepts of pipelining, throughput and speedup, pipeline hazards.\nParallel Processors: Introduction to parallel processors, Concurrent access to memory and cache coherency.',
        },
        {
            module: '4',
            topics: 'Memory organization: Memory interleaving, concept of hierarchical memory organization, cache memory, cache size vs. Block size, mapping functions, replacement algorithms, write policies.',
        },
    ],
    books: [
        { name: 'Computer Organization and Design: The Hardware/Software Interface', author: 'David A. Patterson and John L. Hennessy' },
        { name: 'Computer Organization and Embedded Systems, 6th Edition', author: 'Carl Hamacher' },
        { name: 'Computer Architecture and Organization, 3rd Edition', author: 'John P. Hayes' },
        { name: 'Computer Organization and Architecture: Designing for Performance,10th Edition', author: 'William Stallings' },
    ],

    outcomes: [
        '1. Draw the functional block diagram of a single bus architecture of a computer and describe the function of the instruction execution cycle, RTL interpretation of instructions, addressing modes, instruction set.',
        '2. Write assembly language program for specified microprocessor for computing 16 bit multiplication, division and I/O device interface (ADC, Control circuit, serial port communication). ',
        '3. Write a flowchart for Concurrent access to memory and cache coherency in Parallel Processors and describe the process.',
        '4. Given a CPU organization and instruction, design a memory module and analyze its operation by interfacing with the CPU.', 
        '5. Given a CPU organization, assess its performance, and apply design techniques to enhance performance using pipelining, parallelism and RISC methodology. ',
    ],
};
