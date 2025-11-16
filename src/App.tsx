import './App.css';
import StarBorder from './components/StarBorder.jsx';
import { TypingAnimation } from './components/ui/typing-animation';
import { MarkGithubIcon, FileIcon } from '@primer/octicons-react';
import FloatingLines from './components/FloatingLines';
import Spline from '@splinetool/react-spline';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="app-page min-h-screen overflow-hidden relative">

      {/* Floating Background Lines */}
      <div className="absolute top-[-500px] left-0 right-0 bottom-0 -z-10 opacity-25">
        <FloatingLines
          lineCount={2}
          animationSpeed={1}
        />
      </div>

      {/* NavBar */}
      <NavBar />

      {/* AboveFold */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[110vh] above-fold">

        {/* Left Section */}
        <div className="flex flex-col items-start justify-center px-24 h-[820px]">
          <div>
            <h1 className="font-league font-bold text-white">
              Hello! I am Praise
            </h1>
          </div>

          <TypingAnimation
            words={['Lorem Ipsum', 'Lorem Lorem Ipsum', 'Ipsum']}
            className="text-purple-600 font-inter font-bold py-2 text-4xl"
            loop={true}
            typeSpeed={30}
            deleteSpeed={30}
            pauseDelay={400}
            showCursor={true}
            cursorStyle="line"
            blinkCursor={true}
          />

          <p className="text-gray-400 text-[14px] pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam
            odio, ornare et nisi at, consectetur adipiscing elit. Sed quam ipsum dolor sit amet
          </p>

          <div className="flex gap-2 pt-4">
            <StarBorder as="button" color="purple" speed="3s" aria-label="Resume">
              <FileIcon size={14} />
            </StarBorder>

            <StarBorder as="button" color="purple" speed="3s" aria-label="GitHub">
              <MarkGithubIcon size={14} />
            </StarBorder>

            <StarBorder as="button" color="purple" speed="3s" aria-label="LinkedIn">
              <MarkGithubIcon size={14} />
            </StarBorder>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center overflow-hidden">
          <Spline scene="https://prod.spline.design/dHYqq0VC0w0yQC4i/scene.splinecode" />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col">
        <h2 className="flex items-center justify-center text-white text-3xl font-bold py-2">
          Projects
        </h2>

        <p className="flex items-center justify-center text-gray-500 text-md pb-54">
          Explore my projects and technical expertise. Each section a milestone of my continuous learning journey.
        </p>
      </div>

    </div>
  );
}

export default App;