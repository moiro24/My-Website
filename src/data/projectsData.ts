export interface Project {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  tech: string[];
  image: string;
  github?: string;
  liveDemo?: string;
  status?: 'Live' | 'In development' | 'Completed';
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'metro-awnings',
    title: 'Metro Awnings Website',
    description:
      'Professional website for a local awning installation company. Features service showcase, pricing calculator, project gallery, and automated quote requests.',
    problemSolved:
      'Business needed an online presence to reach more customers and showcase previous work. Reduced phone inquiry burden with automated form submissions.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Nodemailer'],
    image: '/images/projects/metro-awnings.jpg',
    github: 'https://github.com/moiro24/metro-awnings',
    status: 'In development',
    featured: true,
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Website',
    description:
      'Personal portfolio and resume site. Clean, modern design showcasing projects, skills, experience, and contact information. Built with Next.js and optimized for performance.',
    problemSolved:
      'Created a professional online presence to showcase development skills to recruiters and potential clients. Mobile-first design with fast load times.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    image: '/images/projects/portfolio.jpg',
    github: 'https://github.com/moiro24/My-Website',
    status: 'Live',
    featured: true,
  },
  {
    id: 'js-projects',
    title: 'JavaScript & React Learning Projects',
    description:
      'Collection of projects built during intensive coding bootcamp. Includes weather app, to-do list, calculator, and interactive games demonstrating vanilla JavaScript and React fundamentals.',
    problemSolved:
      'Hands-on practice with core JavaScript concepts, DOM manipulation, React hooks, state management, and component composition.',
    tech: [
      'JavaScript (ES6+)',
      'React',
      'HTML5',
      'CSS3',
      'REST APIs',
      'Local Storage',
    ],
    image: '/images/projects/js-projects.jpg',
    github: 'https://github.com/moiro24',
    featured: false,
  },
];
