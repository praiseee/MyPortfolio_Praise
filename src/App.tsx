import './App.css';
import { TypingAnimation } from './components/ui/typing-animation';
import StarBorder from './components/StarBorder.jsx';
import { MarkGithubIcon, FileIcon } from '@primer/octicons-react';
import NavBar from './components/NavBar.tsx';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="app-page min-h-screen overflow-hidden">

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
            <StarBorder as="button" color="purple" speed="3s" aria-label="Download Resume">
              <FileIcon size={16} />
            </StarBorder>

            <StarBorder as="button" color="purple" speed="3s" aria-label="GitHub">
              <MarkGithubIcon size={16} />
            </StarBorder>

            <StarBorder as="button" color="purple" speed="3s" aria-label="LinkedIn">
              Linkedin
            </StarBorder>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center overflow-hidden">
        <Spline scene="https://prod.spline.design/MCqyRCSm5hP4NmQB/scene.splinecode" />
        </div>
      </div>

      {/* Tech Stack */}
      <div className='flex flex-col'>
        <h2 className="flex items-center justify-center text-white text-3xl font-bold">
          Tech Stack
        </h2>
        
        <div className='h-[620px]'>
          <Spline scene="https://prod.spline.design/dHYqq0VC0w0yQC4i/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default App;