export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
      <h6>A revision module for IGSCE,GCSE & SSCE</h6>
      <h1>Revise with me- Chemistry (Bonding and structure)</h1>
      <h4>Bonding in chemistry is the attractive force that holds particles together in a compound or molecule. Atoms bond in order to achieve a stable electronic arrangement, usually by:
losing electrons,
gaining electrons,
or sharing electrons.</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
