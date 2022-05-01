module.exports = course = {
    outline:
        'Hands-on experiments related to the course contents of ESC 301.',
    objecttives: [
        '1. To learn the fundamentals of analog electronic circuits.\n2. To design, construct and debug the analog electronic circuits. \n3. Principles of operation, terminal characteristics, and equivalent circuit models for diodes, transistors, and op-amps.\n4. Differential amplifiers, frequency response of cascaded amplifiers and gain-bandwidth considerations.\n5. Linear and nonlinear applications of op-amp. ',
    ],
    name: 'Analog Electronic Circuits and Analog Electronic Circuits Lab',
    code: 'ESC 301 & SC 301P',
    credits: 5,
    content: [
        {
            module: '1',
            topics: 'Diode circuits: P-N junction diode, I-V characteristics of a diode; review of half-wave and full-wave rectifiers, Zener diodes, clamping and clipping circuits.',
        },
        {
            module: '2',
            topics: 'BJT circuits: Structure and I-V characteristics of a BJT; BJT as a switch. BJT as an amplifier: smallsignal model, biasing circuits, current mirror; common-emitter, common-base and common-collector amplifiers; Small signal equivalent circuits, high-frequency equivalent circuits.',
        },
        {
            module: '3',
            topics: 'MOSFET circuits: MOSFET structure and I-V characteristics. MOSFET as a switch. MOSFET as an amplifier: small-signal model and biasing circuits, common-source, common-gate and common-drain amplifiers; small signal equivalent circuits - gain, input and output impedances, trans-conductance, high frequency equivalent circuit. ',
        },
        {
            module: '4',
            topics: 'Differential, multi-stage and operational amplifiers: Differential amplifier; power amplifier; direct coupled multi-stage amplifier; internal structure of an operational amplifier, ideal op-amp, nonidealities in an op-amp (Output offset voltage, input bias current, input offset current, slew rate, gain bandwidth product)',
        },
        {
            module: '5',
            topics: 'Linear applications of op-amp: Idealized analysis of op-amp circuits. Inverting and non-inverting amplifier, differential amplifier, instrumentation amplifier, integrator, active filter, P, PI and PID controllers and lead/lag compensator using an op-amp, voltage regulator, oscillators (Wein bridge and phase shift). Analog to Digital Conversion. ',
        },
        {
            module: '6',
            topics: 'Nonlinear applications of op-amp: Hysteretic Comparator, Zero Crossing Detector, Square-wave and triangular-wave generators. Precision rectifier, peak detector, Monoshot. ',
        },
    ],
    books: [
        { name: 'Microelectronic Circuits', author: ' A S Sedra and K. C. Smith' },
        { name: '“Introduction to Operational Amplifier theory and applications”', author: 'J. V. Wait, L. P. Huelsman and G. A. Korn' },
        { name: 'Microelectronics', author: 'J. Millman and A. Grabel' },
        { name: 'The Art of Electronics', author: 'P. Horowitz and W. Hill,' },
    ],

    outcomes: [
        '1. Understand the characteristics of transistors.',
        '2. Design and analyze various rectifier and amplifier circuits.',
        '3. Design sinusoidal and non-sinusoidal oscillators.',
        '4. Understand the functioning of OP-AMP and design OP-AMP based circuits.',
    ],
};
