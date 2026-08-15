export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
      <h4>A revision module for IGSCE,GCSE & SSCE</h4>
      <h1>Revise with me- Chemistry (Particulate Nature of matter)</h1>
           <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
