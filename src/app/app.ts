import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Kinley Phuntsho';

  role = 'IT Student & Developer';
  
  location = 'Phuntsholing, Bhutan';

  introduction = 'I enjoy building software, exploring AI and machine learning, and learning new technologies.';

  skills = [
    'HTML',
    'ML',
    'Angular',
    'Python',
    'Docker',
    'Git'
  ];

  projects = [
    {
      title: 'Smart Livestock Collar',
      description: 'An AI-based system for monitoring livestock health and behavior.',
      technologies: 'HTML, FastAPI, ESP32'
    },
    {
      title: 'CPQ System',
      description: 'A system for configuring products, calculating prices, and generating quotations.',
      technologies: 'Angular, TypeScript, Database'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built while learning Angular.',
      technologies: 'Angular, HTML, CSS, TypeScript'
    }
  ];

  email = 'kinleyphuntsho2005@email.com';
  showProjects() {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
  });
}

  showContact() {
    alert('You can contact me at ' + this.email);
  };
}
