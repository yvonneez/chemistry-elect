export default function TopicList({ topics, onStart }) {
  return (
    <div>

      <h1>Revise with me- Computer (Data Transmission)</h1>
      <h4>Data transmission is the process of sending data from one device to another through a communication channel.

In computing and networking, it involves converting data into signals and transferring them from a sender to a receiver using either wired or wireless media.

Key points:

Data can be transmitted as electrical signals, light pulses, or radio waves.

Transmission may occur over short distances (e.g. keyboard to computer) or long distances (e.g. over the internet)

It is essential for computer networks, the internet, mobile communication, and data sharing.

Simple example:

When you send a message on WhatsApp, your phone transmits data over wireless networks to the recipient’s phone.</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
