import './App.css';
import { TypingAnimation } from './components/ui/typing-animation';

function App() {
  return (
    <div className="flex flex-col items-start justify-start pl-26 gap-2">
      <h1 className="font-league font-bold text-white">
        Hello! I am a
      </h1>
      <TypingAnimation
        words={['Frontend Developer', 'Web Designer', '3D Modeler']}
        className="text-purple-600 font-inter font-bold py-2 text-4xl"
        loop={true}
        typeSpeed={40}
        deleteSpeed={40}
        pauseDelay={500}
        showCursor={true}
        cursorStyle="line"
        blinkCursor={true}
      />
    </div>
  );
}

export default App;
