import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import useCursor from '../hooks/useCursor';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Skills() {
  const { initCursor } = useCursor();

  useEffect(() => {
    initCursor();

    const ctx = document.getElementById('projectChart')?.getContext('2d');
    if (ctx) {
      new ChartJS(ctx, {
        type: 'pie',
        data: {
          labels: ['HTML/CSS', 'React', 'JavaScript', 'Next.js'],
          datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: ['#007bff', '#3a8fff', '#86b7fe', '#5c9eff'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#fff',
                font: {
                  family: 'Inter',
                  size: 12
                },
                padding: 20
              }
            }
          }
        }
      });
    }
  }, [initCursor]);

  return (
    <>
      <div className="cursor"></div>
      <div className="container">
        <header>
          <h1>Skills</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav>
        </header>
        
        <div className="main-section">
          <div className="section languages">
            <h2>Languages</h2>
            <div className="skill-bar">
              <span className="skill-name">HTML5</span>
              <div className="bar-container">
                <div className="bar" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">CSS3</span>
              <div className="bar-container">
                <div className="bar" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">JavaScript</span>
              <div className="bar-container">
                <div className="bar" style={{ width: '40%' }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">React.js</span>
              <div className="bar-container">
                <div className="bar" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span className="skill-name">Node.js</span>
              <div className="bar-container">
                <div className="bar" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
          <div className="section projects">
            <h2>Projects Composition</h2>
            <div className="pie-chart-container">
              <canvas id="projectChart"></canvas>
            </div>
          </div>
        </div>
        <div className="tech-stack-section">
          <div className="tech-stack">
            <h2>Tech Stack & Tools</h2>
            <div className="logo-bar">
              <div className="logo-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                <span>HTML5</span>
              </div>
              <div className="logo-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                <span>CSS3</span>
              </div>
              <div className="logo-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="logo-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="logo-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <span>Node.js</span>
              </div>
              <div className="logo-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                <span>Figma</span>
              </div>
              <div className="logo-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <span>Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}