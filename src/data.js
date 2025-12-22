const topics = [
{
title: "Central Processing Unit (CPU)",
summary:
"The Central Processing Unit (CPU) is the main component of a computer responsible for processing data and executing instructions. It performs calculations, makes decisions, and controls the operation of other hardware components. The CPU is often described as the brain of the computer because all processing tasks pass through it.",

questions: [
{ question: "What does CPU stand for?", options: ["Central Program Unit", "Central Processing Unit", "Computer Processing Unit", "Core Processing Unit"], answer: 1 },
{ question: "The CPU is often referred to as the:", options: ["Memory of the computer", "Brain of the computer", "Storage unit", "Input device"], answer: 1 },
{ question: "Which of the following is NOT a function of the CPU?", options: ["Processing data", "Executing instructions", "Controlling hardware", "Storing files permanently"], answer: 3 },
{ question: "Which component carries out instructions?", options: ["Hard disk", "CPU", "Monitor", "Keyboard"], answer: 1 },
{ question: "All data processing in a computer is handled by the:", options: ["RAM", "CPU", "Power supply", "Motherboard"], answer: 1 }
]
},

{
title: "Von Neumann Architecture",
summary:
"The Von Neumann architecture is a computer design model where program instructions and data are stored in the same memory. It consists of a CPU, memory, input devices, and output devices. This architecture allows instructions to be fetched from memory and executed sequentially.",

questions: [
{ question: "Who proposed the Von Neumann architecture?", options: ["Alan Turing", "Charles Babbage", "John Von Neumann", "Tim Berners-Lee"], answer: 2 },
{ question: "In Von Neumann architecture, data and instructions are stored:", options: ["In separate memories", "On external storage", "In the same memory", "In registers only"], answer: 2 },
{ question: "Which of the following is part of the Von Neumann model?", options: ["CPU", "Memory", "Input/Output devices", "All of the above"], answer: 3 },
{ question: "A key feature of Von Neumann architecture is:", options: ["Parallel execution", "Sequential instruction processing", "Wireless processing", "Cloud storage"], answer: 1 },
{ question: "One limitation of Von Neumann architecture is known as:", options: ["Von Neumann bottleneck", "Cache failure", "Clock delay", "Memory leak"], answer: 0 }
]
},

{
title: "ALU, Control Unit and Registers",
summary:
"The Arithmetic Logic Unit (ALU) performs arithmetic calculations and logical operations. The Control Unit (CU) directs the operation of the processor by controlling the flow of data and instructions. Registers are small, fast storage locations within the CPU used to hold data and instructions temporarily during processing.",

questions: [
{ question: "Which part of the CPU performs calculations?", options: ["Control Unit", "Register", "ALU", "Cache"], answer: 2 },
{ question: "The Control Unit is responsible for:", options: ["Storing data permanently", "Executing arithmetic operations", "Controlling data flow", "Displaying output"], answer: 2 },
{ question: "Registers are best described as:", options: ["Large storage devices", "Temporary high-speed storage", "Input devices", "Secondary memory"], answer: 1 },
{ question: "Which operation is carried out by the ALU?", options: ["File storage", "Addition", "Printing", "Booting"], answer: 1 },
{ question: "Registers are located:", options: ["In RAM", "In the hard disk", "Inside the CPU", "On the motherboard"], answer: 2 }
]
},

{
title: "Cores, Cache and Internal Clock",
summary:
"Modern CPUs may contain multiple cores, allowing them to process several tasks simultaneously. Cache is a small, fast memory inside or close to the CPU that stores frequently used data and instructions. The internal clock controls the speed at which the CPU processes instructions, measured in hertz (Hz).",

questions: [
{ question: "A CPU core is:", options: ["A storage device", "An independent processing unit", "A power supply", "A software program"], answer: 1 },
{ question: "What is the purpose of cache memory?", options: ["Long-term storage", "Speed up data access", "Store files", "Display output"], answer: 1 },
{ question: "The internal clock controls the:", options: ["Size of memory", "Speed of processing", "Colour of display", "Type of software"], answer: 1 },
{ question: "Which unit is used to measure clock speed?", options: ["Bytes", "Hertz", "Volts", "Pixels"], answer: 1 },
{ question: "More CPU cores generally allow:", options: ["Slower processing", "Multitasking", "Less power use always", "Reduced storage"], answer: 1 }
]
},

{
title: "Fetch Decode Execute Cycle",
summary:
"The fetch decode execute cycle describes how a CPU processes instructions. First, an instruction is fetched from memory. Next, it is decoded to determine what action is required. Finally, the instruction is executed. This cycle repeats continuously while the computer is running.",

questions: [
{ question: "What is the first stage of the CPU cycle?", options: ["Execute", "Decode", "Fetch", "Store"], answer: 2 },
{ question: "During the decode stage, the CPU:", options: ["Carries out the instruction", "Identifies the instruction", "Stores data", "Outputs results"], answer: 1 },
{ question: "Which stage performs the instruction?", options: ["Fetch", "Decode", "Execute", "Load"], answer: 2 },
{ question: "The fetch decode execute cycle occurs:", options: ["Once only", "Only at startup", "Continuously", "When programs crash"], answer: 2 },
{ question: "Where are instructions fetched from?", options: ["Hard disk", "Cache only", "Main memory (RAM)", "Output devices"], answer: 2 }
]
},

{
title: "Instruction Set for a CPU",
summary:
"An instruction set is the collection of commands that a CPU can understand and execute. These instructions include data transfer, arithmetic operations, logical operations, and control instructions. Different CPUs may have different instruction sets.",

questions: [
{ question: "An instruction set is:", options: ["A list of programs", "Commands the CPU can execute", "A type of memory", "A hardware component"], answer: 1 },
{ question: "Which of the following is a type of CPU instruction?", options: ["Fetch", "Add", "Save file", "Display image"], answer: 1 },
{ question: "Instruction sets differ because:", options: ["All CPUs are the same", "Different CPUs are designed differently", "Memory size changes", "Clock speed varies"], answer: 1 },
{ question: "Which instruction controls program flow?", options: ["Arithmetic", "Logical", "Control", "Transfer"], answer: 2 },
{ question: "Instruction sets are executed by the:", options: ["Operating system", "CPU", "RAM", "Hard disk"], answer: 1 }
]
},

{
title: "Embedded Systems",
summary:
"An embedded system is a computer system built into a larger device to perform a specific function. Unlike general-purpose computers, embedded systems are designed for dedicated tasks. Examples include washing machines, microwave ovens, traffic lights, and digital cameras.",

questions: [
{ question: "An embedded system is designed to:", options: ["Perform many tasks", "Run office software", "Carry out a specific function", "Store large amounts of data"], answer: 2 },
{ question: "Which of the following is an embedded system?", options: ["Desktop computer", "Laptop", "Washing machine controller", "Tablet"], answer: 2 },
{ question: "Embedded systems are usually:", options: ["General-purpose", "Dedicated-purpose", "Cloud-based", "Portable only"], answer: 1 },
{ question: "Which feature is common in embedded systems?", options: ["Large storage", "Specific task design", "Keyboard input", "Monitor output"], answer: 1 },
{ question: "Embedded systems are often found in:", options: ["Home appliances", "Data centres", "Programming labs", "Office desktops"], answer: 0 }]
    }
];

export default topics;


