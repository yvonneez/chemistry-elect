const topics = [
{
title: "System Software and Application Software",
summary:
"System software is designed to manage and control the computer’s hardware and provide a platform for other software to run. Examples include operating systems such as Windows, macOS, and Linux, as well as utility programs like antivirus software. Application software allows users to perform specific tasks such as word processing, spreadsheets, browsing the internet, and playing games. The key difference is that system software runs the computer, while application software helps the user.",

questions: [
{ question: "Which of the following is system software?", options: ["Microsoft Word", "Windows operating system", "Excel", "PowerPoint"], answer: 1 },
{ question: "Application software is mainly used to:", options: ["Control hardware", "Manage memory", "Perform user tasks", "Start the computer"], answer: 2 },
{ question: "Which of these is application software?", options: ["Linux", "macOS", "Google Chrome", "BIOS"], answer: 2 },
{ question: "System software is important because it:", options: ["Edits documents", "Provides a platform for applications", "Creates hardware", "Stores data permanently"], answer: 1 }
  ]
 },

{
title: "The Role and Functions of an Operating System",
summary:
"An operating system (OS) is system software that manages the computer’s hardware and software resources. Its main functions include memory management, process scheduling, file management, device management, and providing a user interface. The operating system acts as an intermediary between users, application software, and hardware.",

questions: [
{ question: "What is the main role of an operating system?", options: ["Create documents", "Manage hardware and software resources", "Design programs", "Manufacture hardware"], answer: 1 },
{ question: "Which of the following is a function of an OS?", options: ["Word processing", "Memory management", "Gaming", "Spreadsheet creation"], answer: 1 },
{ question: "The operating system acts as an interface between:", options: ["Hardware and electricity", "Users and hardware", "Software and the internet", "Programs only"], answer: 1 },
{ question: "Which is an example of an operating system?", options: ["Chrome", "Windows", "Excel", "Python"], answer: 1 }
]
},

{
title: "Hardware, Firmware and Operating Systems",
summary:
"Hardware refers to the physical components of a computer such as the CPU, memory, keyboard, and storage devices. Firmware is low-level software stored in read-only memory that controls basic hardware functions and helps start the computer, such as the BIOS. The operating system manages hardware resources and allows application software to run. All three components must work together for application software to function correctly.",

questions: [
{ question: "Which component is physical and tangible?", options: ["Firmware", "Hardware", "Operating system", "Application"], answer: 1 },
{ question: "Firmware is best described as software that:", options: ["Runs user applications", "Is permanently stored and controls hardware", "Edits files", "Accesses the internet"], answer: 1 },
{ question: "Which software manages hardware resources?", options: ["Application software", "Firmware", "Operating system", "Utility software"], answer: 2 },
{ question: "Which combination is required for applications to run?", options: ["Hardware only", "Hardware and applications", "Hardware, firmware, and OS", "OS only"], answer: 2 }
]
},

{
title: "Role and Operation of Interrupts",
summary:
"Interrupts are signals sent to the processor to indicate that an event requires immediate attention. When an interrupt occurs, the CPU temporarily stops its current task, saves its state, and executes an interrupt service routine. After the interrupt is handled, the CPU resumes its original task. Interrupts improve efficiency by allowing the system to respond quickly to events such as keyboard input or hardware faults.",

questions: [
{ question: "What is an interrupt?", options: ["A shutdown command", "A signal that requires CPU attention", "A type of software", "A memory error"], answer: 1 },
{ question: "When an interrupt occurs, the CPU:", options: ["Ignores it", "Stops permanently", "Pauses the current task", "Deletes the program"], answer: 2 },
{ question: "Why are interrupts important?", options: ["They slow down the CPU", "They improve system efficiency", "They remove errors", "They increase storage"], answer: 1 },
{ question: "Which of the following can generate an interrupt?", options: ["Keyboard input", "Hard disk size", "Screen colour", "File name"], answer: 0 }
]
},

/* ===============================
   MODULE 2: PROGRAMMING LANGUAGES, TRANSLATORS & IDES
================================ */

{
title: "High-Level and Low-Level Programming Languages",
summary:
"High-level programming languages are designed to be easy for humans to read, write, and understand. Examples include Python, Java, and JavaScript. They are portable and easier to maintain but may run slower. Low-level languages are closer to machine code and hardware, such as assembly language and machine language. They run faster but are harder to write and understand.",

questions: [
{ question: "Which is an advantage of high-level languages?", options: ["Hardware dependent", "Easy to read and maintain", "Uses binary", "Difficult to debug"], answer: 1 },
{ question: "Low-level languages are closer to:", options: ["Human language", "Hardware", "Applications", "Databases"], answer: 1 },
{ question: "Which is a high-level language?", options: ["Assembly", "Machine code", "Python", "Binary"], answer: 2 },
{ question: "Which is a disadvantage of low-level languages?", options: ["Run slowly", "Hard to write and maintain", "Use translators", "Portable"], answer: 1 }
]
},

{
title: "Assembly Language and Assemblers",
summary:
"Assembly language is a low-level programming language that uses mnemonics such as ADD, SUB, and MOV to represent machine instructions. Each assembly instruction corresponds closely to a machine code instruction. An assembler is a translator that converts assembly language into machine code so that the processor can execute it.",

questions: [
{ question: "Assembly language uses:", options: ["Binary only", "English sentences", "Mnemonics", "Flowcharts"], answer: 2 },
{ question: "Assembly language is classified as:", options: ["High-level", "Low-level", "Fourth-generation", "Markup"], answer: 1 },
{ question: "Which translator is used for assembly language?", options: ["Compiler", "Interpreter", "Assembler", "Debugger"], answer: 2 },
{ question: "Assembly language is closer to:", options: ["Human language", "Hardware", "Operating systems", "Databases"], answer: 1 }
]
},

{
title: "Compilers and Interpreters",
summary:
"Compilers and interpreters are translators used for high-level programming languages. A compiler translates the entire program into machine code at once and produces an executable file. An interpreter translates and executes the program line by line without creating a separate executable file.",

questions: [
{ question: "A compiler translates:", options: ["Line by line", "The entire program at once", "Only errors", "Machine code to high-level"], answer: 1 },
{ question: "An interpreter works by:", options: ["Translating the whole program first", "Running machine code only", "Translating line by line", "Ignoring errors"], answer: 2 },
{ question: "Which produces an executable file?", options: ["Interpreter", "Assembler", "Compiler", "IDE"], answer: 2 },
{ question: "Which translator is easier for debugging?", options: ["Compiler", "Interpreter", "Assembler", "Loader"], answer: 1 }
]
},

{
title: "Advantages and Disadvantages of Compilers and Interpreters",
summary:
"Compiled programs usually run faster because translation is completed before execution, but errors are detected only after compilation. Interpreted programs are easier to debug since errors are reported line by line, but they run slower because translation occurs during execution.",

questions: [
{ question: "One advantage of a compiler is that programs:", options: ["Run faster", "Are easier to debug", "Run line by line", "Do not need machine code"], answer: 0 },
{ question: "One disadvantage of a compiler is that:", options: ["It runs slowly", "Errors are found after compilation", "It cannot translate code", "It needs no storage"], answer: 1 },
{ question: "An advantage of an interpreter is:", options: ["Faster execution", "Line-by-line error detection", "Executable file creation", "No translation"], answer: 1 },
{ question: "Which translator is slower during execution?", options: ["Compiler", "Interpreter", "Assembler", "Linker"], answer: 1 }
]
},

{
title: "Integrated Development Environments (IDEs)",
summary:
"An Integrated Development Environment (IDE) is software that provides programmers with tools needed to write, test, debug, and manage code in one place. Common features include a code editor, compiler or interpreter, debugger, syntax highlighting, and error detection. IDEs improve productivity and reduce programming errors.",

questions : [
{ question: "An IDE is mainly used for:", options: ["Building hardware", "Writing and debugging programs", "Running operating systems", "Storing files"], answer: 1 },
{ question: "Which of the following is a feature of an IDE?", options: ["Power supply", "Syntax highlighting", "RAM", "Hard disk"], answer: 1 },
{ question: "Which tool helps find errors in a program?", options: ["Editor", "Debugger", "Assembler", "Loader"], answer: 1 },
{ question: "IDEs are useful because they:", options: ["Slow down programming", "Increase errors", "Improve programmer productivity", "Replace operating systems"], answer: 2 }
 ]
 }
];
export default topics;
