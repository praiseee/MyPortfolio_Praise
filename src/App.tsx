import './App.css';
import { TypingAnimation } from './components/ui/typing-animation';
import StarBorder from './components/StarBorder.jsx' ;
import { MarkGithubIcon } from '@primer/octicons-react'
import { FileIcon } from '@primer/octicons-react'
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <div>
      <NavBar/>
      
      <div className='flex flex-row justify-start gap-120'>
        <div className="flex flex-col items-start justify-start pl-26 gap-2">
          <h1 className="font-league font-bold text-white">
            Hello! I am Praise
          </h1>
          <TypingAnimation
            words={['Frontend Developer', 'Web Designer', '3D Modeler']}
            className="text-purple-600 font-inter font-bold py2 text-4xl"
            loop={true}
            typeSpeed={30}
            deleteSpeed={30}
            pauseDelay={400}
            showCursor={true}
            cursorStyle="line"
            blinkCursor={true}
          />
          <p className='text-gray-400 text-[14px] pt-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam odio, ornare et nisi at,
          </p>

          <div className='flex gap-2 pt-4'>
            <StarBorder
              as="button"
              color="purple"
              speed="3s"
            >
              <FileIcon size={16} />
            </StarBorder>

            <StarBorder
              as="button"
              color="purple"
              speed="3s"
            >
              <MarkGithubIcon size={16} />
            </StarBorder>

            <StarBorder
              as="button"
              color="purple"
              speed="3s"
            >
              Linkedin
            </StarBorder>
          </div>
        </div>

        <p className='text-white font-league items-center'>
          'spline'
        </p>
        
      </div>
    </div>

  );
}

export default App;
