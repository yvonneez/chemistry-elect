export default function TopicList({ topics, onStart }) {
  return (
    <div>
      <h1>Revise with me- Computer Science (Software)</h1>
      <h4>Software refers to the programs and instructions that tell a computer how to operate. System software manages the hardware and provides a platform for application software, which allows users to perform specific tasks. For application software to work properly, hardware, firmware, and operating systems must work together. Interrupts allow the processor to respond quickly to important events, improving system efficiency.</h4>
      <h2>Select a Topic</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
