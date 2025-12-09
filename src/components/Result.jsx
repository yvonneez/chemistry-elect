export default function Result({ topic, userAnswers, onNext }) {
  const score = userAnswers.reduce((s,a,i)=> a===topic.questions[i].answer ? s+1 : s ,0);

  return (
    <div>
      <h2>Results</h2>
      <h3>Your score: {score} / {topic.questions.length}</h3>

      {topic.questions.map((q,i)=>(
        <div key={i} className="question-box">
          <p><strong>Q{i+1}.</strong> {q.question}</p>
          <p className={userAnswers[i]===q.answer ? "correct" : "wrong"}>
            Your answer: {q.options[userAnswers[i]] || "No answer"}
          </p>
          <p>Correct answer: {q.options[q.answer]}</p>
        </div>
      ))}

      <button onClick={onNext}>Back to Topics</button>
    </div>
  );
}
