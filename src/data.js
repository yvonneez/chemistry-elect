const topics = [

{
title: "Types and Methods of Data Transmission",
summary:
"Data transmission is the process of sending data from one device to another through a communication channel. Data can be transmitted using serial transmission, where bits are sent one at a time, or parallel transmission, where multiple bits are sent simultaneously. Transmission methods include simplex (one-way communication), half-duplex (two-way but not at the same time), and full-duplex (two-way at the same time). Data can also be transmitted using wired media such as copper cables and fibre optics, or wireless media such as radio waves and microwaves.",
questions: [
{ question: "What is serial transmission?", options: ["Sending multiple bits at once", "Sending one bit at a time", "Wireless transmission only", "Transmission without cables"], answer: 1 },
{ question: "Which transmission method allows data flow in both directions at the same time?", options: ["Simplex", "Half-duplex", "Full-duplex", "Serial"], answer: 2 },
{ question: "Parallel transmission uses:", options: ["One wire only", "Multiple wires at once", "Wireless signals", "Radio waves"], answer: 1 },
{ question: "Which of the following is an example of wireless transmission?", options: ["Fibre optic cable", "Ethernet cable", "Radio waves", "USB cable"], answer: 2 },
{ question: "Simplex transmission means data flows:", options: ["Both ways simultaneously", "Both ways alternately", "In one direction only", "Only wirelessly"], answer: 2 }
]
},

{
title: "Methods of Error Detection",
summary:
"Error detection methods are used to identify whether data has been corrupted during transmission. A parity check adds an extra bit to ensure the number of 1s is even or odd. A checksum generates a value based on the data and sends it along for comparison at the receiving end. Automatic Repeat Request (ARQ) detects errors and requests that corrupted data be retransmitted, improving data accuracy and reliability.",
questions: [
{ question: "What is the main purpose of error detection?", options: ["Increase speed", "Reduce file size", "Detect corrupted data", "Encrypt data"], answer: 2 },
{ question: "Parity check works by adding:", options: ["An extra byte", "An extra bit", "A secret key", "A checksum"], answer: 1 },
{ question: "Which method asks for data to be resent if an error is found?", options: ["Checksum", "Parity check", "ARQ", "Encryption"], answer: 2 },
{ question: "Checksum is used to:", options: ["Encrypt data", "Compress files", "Compare data values", "Increase bandwidth"], answer: 2 },
{ question: "Error detection mainly improves:", options: ["Security", "Data accuracy", "Transmission speed", "Storage size"], answer: 1 }
]
},

{
title: "Symmetric and Asymmetric Encryption",
summary:
"Encryption is used to protect data from unauthorised access during transmission. Symmetric encryption uses the same key to encrypt and decrypt data, making it fast but requiring secure key sharing. Asymmetric encryption uses two keys: a public key for encryption and a private key for decryption. While asymmetric encryption is more secure for key exchange, it is slower than symmetric encryption.",
questions: [
{ question: "Which encryption method uses one key?", options: ["Asymmetric encryption", "Symmetric encryption", "Hashing", "Encoding"], answer: 1 },
{ question: "Asymmetric encryption uses:", options: ["One key", "Two keys", "No keys", "Multiple shared keys"], answer: 1 },
{ question: "Which key is shared openly in asymmetric encryption?", options: ["Private key", "Secret key", "Public key", "Master key"], answer: 2 },
{ question: "Which encryption method is generally faster?", options: ["Asymmetric", "Symmetric", "Both are equal", "Neither"], answer: 1 },
{ question: "The main purpose of encryption is to provide:", options: ["Compression", "Confidentiality", "Faster transmission", "Error detection"], answer: 1 }
]
},
{
title: "Encryption and Error Detection",
summary:
"Encryption is the process of converting plaintext into ciphertext to protect data from unauthorised access. In asymmetric encryption, different keys are used for encryption and decryption, while symmetric encryption uses the same key at both ends. Error detection methods are used to identify mistakes during data entry or transmission. These include parity checks, check digits, checksums, and Automatic Repeat Request (ARQ), which improve data accuracy and reliability.",
questions: [
{ question:  "When carrying out asymmetric encryption, which of the following must keep the private key?", options: ["The sender", "The receiver", "Both sender and receiver", "All recipients of the message","None of the above"], answer: 0 },
{ question: "In encryption, which of the following is the term used to describe the message before it is encrypted?",
options: ["Simpletext","Plaintext", "Context", "Ciphertext", "Firsttext"], answer: 1 },
{
question: "Which of the following is the biggest disadvantage of using symmetric encryption?",
options: [
"It is very complex and time consuming",
"It is rarely used anymore",
"The value of the key reads the same in both directions",
"It only works on computers with older operating systems",
"There is a security problem when transmitting the encryption key"
],
answer: 4
},

{
question: "Which of the following is the correct name for a form of encryption in which both the sender and the recipient use the same key to encrypt and decrypt?",
options: [
"Symmetric key encryption",
"Asymmetric key encryption",
"Public key encryption",
"Same key encryption",
"Block cipher encryption"
],
answer: 0
},

{
question: "What do we call the final number in a code, which is calculated from the numbers in the code and is used to find errors in data entry?",
options: [
"Parity check",
"Checksum",
"Cyclic redundancy check",
"Parity bit",
"Check digit"
],
answer: 4
},

{
question: "Which of the following is a form of error detection that makes use of acknowledgements and timers?",
options: [
"Automatic repeat request",
"Echo check",
"Check digit",
"Parity bit",
"Cyclic redundancy check"
],
answer: 0
},

{
question: "Which of the following methods uses an extra bit added to a byte to ensure it contains an even number of 1s or an odd number of 1s?",
options: [
"Cyclic redundancy check",
"Parity check",
"Checksum",
"Check digit",
"Echo check"
],
answer: 1
},

{
question: "Which of the following uses a calculated value which is sent after a block of data, and the receiving computer also calculates the value and compares the results?",
options: [
"Parity check",
"Check digit",
"Packet switching",
"Checksum",
"Automatic repeat request"
],
answer: 3
},


]
},

];
export default topics;



