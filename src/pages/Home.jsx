import { Link } from 'react-router-dom';
import Dither from '../Dither';
import { useEffect } from 'react';
import useCursor from '../hooks/useCursor';

export default function Home() {
  const { initCursor } = useCursor();

  useEffect(() => {
    initCursor();
  }, [initCursor]);

  return (
    <>
      <div className="background-container">
        <Dither
          waveColor={[0.2, 0.2, 0.2]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.2}
          waveFrequency={2}
          waveSpeed={0.03}
        />
      </div>
      <div className="cursor"></div>
      <div className="frame">
        <header>
          <h1>M Vashista Reddy</h1>
          <p className="subtitle">Web Developer</p>
          <nav>
            <ul>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <div className="about-text">
          <p>Born in 2005</p>
          <p>in Karimnagar, India.</p>
          <p>I believe</p>
          <p>websites should be</p>
          <p><span style={{ fontWeight: 700, fontSize: '1.2rem' }}>minimalistic</span> and <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>clear</span>.</p>
          <p>With space to breathe,</p>
          <p>and nothing extra.</p>
          <p><span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Whitespace</span> isn't empty</p>
          <p>it's essential.</p>
          <p>I seek <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>simplicity</span></p>
          <p>over <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>clutter</span>,</p>
          <p>clarity over noise,</p>
          <p>and design that feels</p>
          <p>light, focused,</p>
          <p>and <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>human</span>.</p>
        </div>
      </div>
    </>
  );
}