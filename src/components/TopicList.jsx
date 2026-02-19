export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
      <h6>A revision module for IGSCE,GCSE & SSCE</h6>
      <h1>Revise with me- Computer Science (The Internet)</h1>
      <h4>The Internet is a global network of connected computers that allows people around the world to communicate, share information, and access services. It enables activities like browsing websites, sending emails, using social media, streaming videos, and online learning.</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
