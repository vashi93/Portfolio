import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useCursor from '../hooks/useCursor';

export default function Projects() {
  const { initCursor } = useCursor();

  useEffect(() => {
    initCursor();

    const handleProjectClick = (projectId) => {
      const popup = document.getElementById(`${projectId}-popup`);
      const overlay = document.getElementById('overlay');
      if (popup && overlay) {
        overlay.style.display = 'block';
        popup.style.display = 'block';
      }
    };

    const handleClose = () => {
      const overlay = document.getElementById('overlay');
      const popups = document.querySelectorAll('.project-popup');
      if (overlay) {
        overlay.style.display = 'none';
        popups.forEach(popup => {
          popup.style.display = 'none';
        });
      }
    };

    document.querySelectorAll('.project-item').forEach(item => {
      item.addEventListener('click', () => handleProjectClick(item.dataset.project));
    });

    document.querySelectorAll('.popup-close').forEach(button => {
      button.addEventListener('click', handleClose);
    });

    const overlay = document.getElementById('overlay');
    if (overlay) {
      overlay.addEventListener('click', handleClose);
    }

    return () => {
      document.querySelectorAll('.project-item').forEach(item => {
        item.removeEventListener('click', () => handleProjectClick(item.dataset.project));
      });
      document.querySelectorAll('.popup-close').forEach(button => {
        button.removeEventListener('click', handleClose);
      });
      if (overlay) {
        overlay.removeEventListener('click', handleClose);
      }
    };
  }, [initCursor]);

  return (
    <>
      <div className="cursor"></div>
      <div className="frame">
        <header>
          <h1>Projects</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
        </header>
        
        <div className="content">
          <div className="project-grid">
            <div className="project-item" data-project="revoro">
              <h2>REVORO</h2>
              <p>Fashion rental startup</p>
            </div>
            <div className="project-item" data-project="silver-jubilee">
              <h2>Silver Jubilee</h2>
              <p>Official website for Silver Jubilee of Vardhaman College</p>
            </div>
            <div className="project-item" data-project="event-ticket">
              <h2>Event Ticket Validation System</h2>
              <p>A simple web tool to verify event registrations and generate entry passes instantly.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="overlay" id="overlay"></div>
      
      <div className="project-popup" id="revoro-popup">
        <button className="popup-close">&times;</button>
        <h2 className="popup-title">REVORO</h2>
        <p className="popup-description">Revoro is a fashion rental platform that connects users with individuals and brands to rent stylish, high-end outfits for special occasions. With its unique peer-to-peer and brand-to-person model, Revoro offers a curated catalog, easy booking, and personalized fashion recommendations.</p>
        <div className="tech-stack">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="tech-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="tech-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-icon" />
        </div>
        <a href="https://revoro.neocities.org" target="_blank" rel="noopener noreferrer" className="view-button">View Project</a>
      </div>
      
      <div className="project-popup" id="silver-jubilee-popup">
        <button className="popup-close">&times;</button>
        <h2 className="popup-title">Silver Jubilee</h2>
        <p className="popup-description">The official website for the Silver Jubilee celebration of Vardhaman College. Features event schedules, Food Stalls, and interactive timeline showcasing the college's 25-year journey.</p>
        <div className="tech-stack">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="tech-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="tech-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon" />
        </div>
        <a href="https://25years.vardhaman.org" target="_blank" rel="noopener noreferrer" className="view-button">View Project</a>
      </div>
      
      <div className="project-popup" id="event-ticket-popup">
        <button className="popup-close">&times;</button>
        <h2 className="popup-title">Event Ticket Validation System</h2>
        <p className="popup-description">A web-based tool designed to streamline event check-ins by quickly validating registrations. Features include QR code scanning, real-time validation, and attendance analytics.</p>
        <p className="popup-description">NOT HOSTED</p>
        <div className="tech-stack">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="tech-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="tech-icon" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-icon" />
        </div>
        <a href="https://github.com/vashi93/event" target="_blank" rel="noopener noreferrer" className="view-button">View Project</a>
      </div>
    </>
  );
}