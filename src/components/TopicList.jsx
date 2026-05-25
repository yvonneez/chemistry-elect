export default function TopicList({ topics, onStart }) {
  return (
    <div>
      
      <h6>A revision module for IGSCE,GCSE & SSCE</h6>
      <h1>Revise with me- Physics (Physical Quantities & Dimensions)</h1>
      <h4>Physical quantities are:

Fundamental quantities — basic quantities like length, mass, and time.
Derived quantities — obtained from fundamental quantities, e.g. velocity and force.

Dimensions show how quantities relate to mass (M), length (L), and time (T). For example:

Velocity = LT⁻¹
Force = MLT⁻²

Dimensional analysis helps to check the correctness of equations and formulas.</h4>
      <h2>Select a Topic:</h2>
      <ul className="topic-list">
        {topics.map((topic,i)=>(
          <li key={i} onClick={()=>onStart(topic)}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
}
