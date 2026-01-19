export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
      <h6>A revision module for IGSCE,GCSE & SSCE</h6>
      <h1>Revise with me- Chemistry (states of matter)</h1>
      <h4>Matter exists in different physical forms known as states of matter. The three main states are solid, liquid, and gas. The behavior of these states is explained by the kinetic particle theory, which states that all matter is made of tiny particles in constant motion.</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
