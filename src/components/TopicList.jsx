export default function TopicList({ topics, onStart }) {
  return (
    <div>
      <h1>Revise with me- Computer (Hardware)</h1>
      <h4>Computer hardware refers to the physical and tangible components of a computer system that can be seen and touched. It includes devices used for input, processing, storage, output, and communication, such as the keyboard, mouse, system unit, monitor, storage devices, and network equipment. Hardware works together with software to perform tasks and process data in a computer system</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
