import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useCursor from '../hooks/useCursor';

export default function Contact() {
  const { initCursor } = useCursor();

  useEffect(() => {
    initCursor();
  }, [initCursor]);

  return (
    <>
      <div className="cursor"></div>
      <div className="frame">
        <header>
          <h1>Contact</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
        </header>
        
        <div className="content">
          <div className="contact-form">
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}