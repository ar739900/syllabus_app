module.exports = course = {
    outline:
        'Hands-on experiments related to the course contents of ESC 401.',
    objecttives: [
        '1. Understand working of logic families and logic gates.\n2. Design and implement Combinational and Sequential logic circuits.\n3. Understand the process of Analog to Digital conversion and Digital to Analog conversion. \n4. Be able to use Programmable logic devices to implement the given logical problem.',
    ],
    name: 'Digital Electronics and Digital Electronics Lab',
    code: 'ESC 401 & ESC 401P',
    credits: 5,
    content: [
        {
            module: '1',
            topics: 'Fundamentals of Digital Systems and logic families: Digital signals, digital circuits, AND, OR, NOT, NAND, NOR and Exclusive-OR operations, Boolean algebra, examples of IC gates, number systems-binary, signed binary, octal hexadecimal number, binary arithmetic, one’s and two’s complements arithmetic, codes, error detecting and correcting codes, characteristics of digital lCs, digital logic families, TTL, Schottky TTL and CMOS logic, interfacing CMOS and TTL, Tri - state logic.',
        },
        {
            module: '2',
            topics: 'Combinational Digital Circuits: Standard representation for logic functions K-map representation, simplification of logic functions using K-map, minimization of logical functions. Don’t care conditions, Multiplexer, DeMultiplexer/Decoders, Adders, Subtractors, BCD arithmetic, carry look ahead adder, serial adder, ALU, elementary ALU design, popular MSI chips, digital comparator, parity checker/generator, code converters, priority encoders, decoders/drivers for display devices, Q-M method of function realization.',
        },
        {
            module: '3',
            topics: 'Sequential circuits and systems: A 1-bit memory, the circuit properties of Bistable latch, the clocked SR flip flop, J- K-T and D types flip flops, applications of flip flops, shift registers, applications of shift registers, serial to parallel converter, parallel to serial converter, ring counter, sequence generator, ripple (Asynchronous) counters, synchronous counters, counters design using flip flops, special counter IC’s, asynchronous sequential counters, applications of counters.',
        },
        {
            module: '4',
            topics: 'A/D and D/A Converters: Digital to analog converters: weighted resistor/converter, R2RLadder D/A converter, specifications for D/A converters, examples of D/A converter lCs, sample and hold circuit, analog to digital converters: quantization and encoding, parallel comparator A/D converter, successive approximation A/D converter, counting A/D converter, dual slope A/D converter, A/D converter using Voltage to frequency and voltage to time conversion, specifications of A/D converters, example of A/D converter ICs.',
        },
        {
            module: '5',
            topics: 'Semiconductor memories and Programmable logic devices: Memory organization and operation, expanding memory size, classification and characteristics of memories, sequential memory, read only memory (ROM), read and write memory(RAM), content addressable memory (CAM), charge de coupled device memory (CCD), commonly used memory chips, ROM as a PLD, Programmable logic array, Programmable array logic, complex Programmable logic devices (CPLDS), Field Programmable Gate Array (FPGA). ',
        },
    ],
    books: [
        { name: 'Modern Digital Electronics', author: 'R. P. Jain' },
        { name: 'Digital logic and Computer design', author: 'M. M. Mano' },
        { name: 'Fundamentals of Digital Circuits', author: 'A. Kumar' },
        { name: '', author: '' },
    ],

    outcomes: [
        '***********',
    ],
};
