export default function TopicList({ topics, onStart }) {
  return (
    <div>
      <h1>Chemistry - Electrochemistry</h1>
      <h2>Select a Topic</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
