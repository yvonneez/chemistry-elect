export default function TopicList({ topics, onStart }) {
  return (
    <div>
      <h1>Revise with me- Computer (Computer Architecture)</h1>
      <h4>Computer architecture is the way a computer’s hardware components are designed, arranged, and connected to work together to process instructions.</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
