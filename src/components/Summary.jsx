export default function Summary({ topic, onNext }) {
  return (
    <div>
      <h2>{topic.title}</h2>
      <p>{topic.summary}</p>
      <button onClick={onNext}>Start Quiz</button>
    </div>
  );
}
