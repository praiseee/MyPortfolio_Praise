import './App.css';
import StarBorder from './components/StarBorder.jsx' ;
import { TypingAnimation } from './components/ui/typing-animation';

function App() {
  return (
    <div className="flex flex-col items-start justify-start pl-26 gap-2">

      <h1 className="font-league font-bold text-white">
        Hello! I am a
      </h1>
      <TypingAnimation
        words={['Frontend Developer', 'Web Designer', '3D Modeler']}
        className="text-purple-600 font-inter font-bold py2 text-4xl"
        loop={true}
        typeSpeed={40}
        deleteSpeed={40}
        pauseDelay={500}
        showCursor={true}
        cursorStyle="line"
        blinkCursor={true}
      />
      <div className='flex felx-col gap-4 pt-6  '>
        <StarBorder
          as="button"
          className="border-gradient-0 border-black"
          color="magenta"
          speed="3s"
        >
          Resume
        </StarBorder>

        <StarBorder
          as="button"
          className="border-gradient-0 border-black"
          color="magenta"
          speed="3s"
          padding="2px 2px"
        >
          Github
        </StarBorder>

        <StarBorder
          as="button"
          className="border-gradient-0 border-black"
          color="magenta"
          speed="3s"
          padding=""
        >
          Linkedin
        </StarBorder>
      </div>

    </div>
  );
}

export default App;
