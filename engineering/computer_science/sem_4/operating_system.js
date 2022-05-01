module.exports = course = {
    outline:
        ' Hands-on experiments related to the course contents of PCC CS 403.',
    objecttives: [
        '1. To learn the fundamentals of Operating Systems.\n2. To learn the mechanisms of OS to handle processes and threads and their communication.\n3. To learn the mechanisms involved in memory management in contemporary OS.\n4. To gain knowledge on distributed operating system concepts that includes architecture, mutual exclusion algorithms, deadlock detection algorithms and agreement protocols.\n5. To know the components and management aspects of concurrency management.\n6. To learn to implement simple OS mechanisms',
    ],
    name: 'Operating Systems and Operating Systems Lab',
    code: 'PCC CS 403 & PCC CS 403P',
    credits: 5,
    content: [
        {
            module: '1',
            topics: 'Introduction: Concept of Operating Systems, Generations of Operating systems, Types of Operating Systems, OS Services, System Calls, Structure of an OS-Layered, Monolithic, Microkernel Operating Systems, Concept of Virtual Machine. Case study on UNIX and WINDOWS Operating System. ',
        },
        {
            module: '2',
            topics: 'Processes: Definition, Process Relationship, Different states of a Process, Process State transitions, Process Control Block (PCB), Context switching. \nThread: Definition, Various states, Benefits of threads, Types of threads, Concept of multithreads.\nProcess Scheduling: Foundation and Scheduling objectives, Types of Schedulers, Scheduling criteria: CPU utilization, Throughput, Turnaround Time, Waiting Time, Response Time; Scheduling algorithms: Pre-emptive and Non pre-emptive, FCFS, SJF, RR; Multiprocessor scheduling: Real Time scheduling: RM and EDF.',
        },
        {
            module: '3',
            topics: 'Inter-process Communication: Critical Section, Race Conditions, Mutual Exclusion, Hardware Solution, Strict Alternation, Peterson’s Solution, The Producer - Consumer Problem, Semaphores, Event Counters, Monitors, Message Passing, Shared Memory, Classical IPC Problems: Reader’s & Writer Problem, Dinning Philosopher Problem etc. ',
        },
        {
            module: '4',
            topics: 'Deadlocks: Definition, Necessary and sufficient conditions for Deadlock, Deadlock Prevention, and Deadlock Avoidance: Banker’s algorithm, Deadlock detection and Recovery.',
        },
        {
            module: '5',
            topics: 'Memory Management: Basic concept, Logical and Physical address map, Memory allocation: Contiguous Memory allocation – Fixed and variable partition–Internal and External fragmentation and Compaction; Paging and Segmentation: Principle of operation – Page allocation – Hardware support for paging, Protection and sharing, Advantages and Disadvantages of paging and segmentation. \nVirtual Memory: Basics of Virtual Memory – Hardware and control structures – Locality of reference, Page fault , Working Set , Dirty page/Dirty bit – Demand paging, Page Replacement algorithms: Optimal, First in First Out (FIFO), Second Chance (SC), Not recently used (NRU) and Least Recently used (LRU).',
        },
        {
            module: '6',
            topics: 'File Management: Concept of File, Access methods, File types, File operation, Directory structure, File System structure, Allocation methods (contiguous, linked, indexed), Freespace management (bit vector, linked list, grouping), directory implementation (linear list, hash table), efficiency and performance.\nDisk Management: Disk structure, Disk scheduling - FCFS, SSTF, SCAN, C-SCAN, Disk reliability, Disk formatting, Boot-block, Bad blocks.\nI/O Hardware: I/O devices, Device controllers, Direct memory access, Principles of I/O Software: Goals of Interrupt handlers, Device drivers, Device independent I/O software, Secondary-Storage Structure.',
        },
    ],
    books: [
        { name: 'Operating System Concepts Essentials, 9th Edition', author: 'Avi Silberschatz, Peter Galvin, Greg Gagne' },
        { name: 'Operating Systems: Internals and Design Principles, 5th Edition', author: 'William Stallings' },
        { name: 'Operating Systems: Design and Implementation 3rd Edition', author: 'Andrew S. Tanenbaum' },
        { name: 'Modern Operating Systems, 4th Edition', author: 'Andrew S. Tanenbaum ' },
    ],

    outcomes: [
        '1. Understand algorithms for process scheduling for a given specification of CPU utilization, Throughput, Turnaround Time, Waiting Time, and Response Time.',
        '2. Develop the techniques for optimally allocating memory to processes by increasing memory utilization and for improving the access time. ',
        '3. Understand and implement file management system.',
        '4. Understand the I/O management functions in OS by performing operations for synchronization between CPU and I/O controllers.',
    ],
};
