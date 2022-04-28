module.exports = course = {
    outline:
        'Lab project are based on the topics of theory modules',
    objecttives: [
        ' To develop an understanding of modern network architectures from a design and performance perspective. \n To introduce the student to the major concepts involved in wide-area networks (WANs), local area networks (LANs) and Wireless LANs (WLANs). \n To provide an opportunity to do network programming \n To provide a WLAN measurement ideas. ',
    ],
    name: 'Computer Network \n Computer Network Lab',
    code: 'PCC CS 402 & PCC CS 403',
    credits: 5,
    content: [
        {
            module: '1',
            topics: 'Data communication Components: Representation of data and its flow Networks , Various Connection Topology, Protocols and Standards, OSI model, Transmission Media, LAN: Wired LAN, Wireless LANs, Connecting LAN and Virtual LAN, Techniques for Bandwidth utilization: Multiplexing - Frequency division, Time division and Wave division, Concepts on spread spectrum.',
        },
        {
            module: '2',
            topics: 'Data Link Layer and Medium Access Sub Layer: Error Detection and Error Correction - Fundamentals, Block coding, Hamming Distance, CRC; Flow Control and Error control protocols - Stop and Wait, Go back – N ARQ, Selective Repeat ARQ, Sliding Window, Piggybacking, Random Access, Multiple access protocols -Pure ALOHA, Slotted ALOHA, CSMA/CD,CDMA/CA ',
        },
        {
            module: '3',
            topics: 'Network Layer: Switching, Logical addressing – IPV4, IPV6; Address mapping - ARP, RARP, BOOTP and DHCP–Delivery, Forwarding and Unicast Routing protocols. ',
        },
        {
            module: '4',
            topics: 'Transport Layer: Process to Process Communication, User Datagram Protocol (UDP), Transmission Control Protocol (TCP), SCTP Congestion Control; Quality of Service, QoS improving techniques: Leaky Bucket and Token Bucket algorithm.',
        },
        {
            module: '5',
            topics: 'Application Layer: Domain Name Space (DNS), DDNS, TELNET, EMAIL, File Transfer Protocol (FTP), WWW, HTTP, SNMP, Bluetooth, Firewalls, Basic concepts of Cryptography. ',
        },
    ],
    books: [
        { name: ' Data Communication and Networking, 4th Edition', author: 'Behrouz A. Forouzan' },
        { name: ' Data and Computer Communication, 8th Edition', author: 'William Stallings' },
        { name: 'Computer Networks, 8th Edition', author: 'Andrew S. Tanenbaum' },
    ],

    outcomes: [
        '1. Explain the functions of the different layer of the OSI Protocol.',
        '2. Draw the functional block diagram of wide-area networks (WANs), local area networks (LANs) and Wireless LANs (WLANs) and can able to describe the function of each block. ',
        '3. Program for a given problem related TCP/IP protocol.',
        '4. Configure DNS DDNS, TELNET, EMAIL, File Transfer Protocol (FTP), WWW, HTTP, SNMP, Bluetooth, Firewalls using open source available software and tools.'
    ],
};
