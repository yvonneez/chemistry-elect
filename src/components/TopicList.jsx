export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
      <h6>A revision module for IGSCE,GCSE & SSCE</h6>
      <h1>Revise with me- Physics (motion)</h1>
      <h4>Motion is the change in position of an object with time relative to a reference point.
An object is said to be in motion if its position changes as time passes when compared to a fixed point or observer.</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
