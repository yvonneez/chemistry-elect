
import { useState } from "react";
import topics from "./data";
import TopicList from "./components/TopicList";
import Summary from "./components/Summary";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Footer from "./components/Footer";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentTopic, setCurrentTopic] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <div className="container">
      {screen === "home" && (
        <TopicList topics={topics} onStart={(topic)=>{ setCurrentTopic(topic); setScreen("summary"); }} />
      )}

      {screen === "summary" && (
        <Summary topic={currentTopic} onNext={()=>setScreen("quiz")} />
      )}

      {screen === "quiz" && (
        <Quiz topic={currentTopic} onSubmit={(answers)=>{ setUserAnswers(answers); setScreen("result"); }} />
      )}

      {screen === "result" && (
        <Result topic={currentTopic} userAnswers={userAnswers} onNext={()=>setScreen("home")} />
      )}

      <Footer />
    </div>
  );
}
