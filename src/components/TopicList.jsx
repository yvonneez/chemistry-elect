export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
      <h6>A revision module for IGSCE,GCSE & SSCE</h6>
      <h1>Revise with me- Computer (Computer Ethics)</h1>
      <h4>Computer ethics refers to the moral principles and rules that guide the responsible use of computers, technology, and information systems. It helps users understand what is right and wrong when using digital devices, software, and the internet. Ethical computing promotes respect, privacy, security, and lawful behavior.</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
