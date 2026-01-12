export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
      <h6>A revision module for IGSCE,GCSE & SSCE</h6>
      <h1>Revise with me- Computer (Data Transmission)</h1>
      <h4>Encryption and Error Detection
 is the process of converting plaintext into ciphertext to protect data from unauthorised access. In asymmetric encryption, different keys are used for encryption and decryption, while symmetric encryption uses the same key at both ends. Error detection methods are used to identify mistakes during data entry or transmission. These include parity checks, check digits, checksums, and Automatic Repeat Request (ARQ), which improve data accuracy and reliability.</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
