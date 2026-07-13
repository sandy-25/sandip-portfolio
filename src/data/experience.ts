import type { ExperienceItem } from '@/types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'careernet',
    company: 'Careernet',
    role: 'Software Developer',
    type: 'Full-time',
    startDate: '2022',
    endDate: 'Present',
    location: 'Ahmedabad, India',
    description:
      'Working as a Software Developer at Careernet, deployed on an enterprise project for Cognizant. Building and maintaining large-scale compliance and audit management applications using Microsoft technology stack.',
    clientProject: 'Deployed at Cognizant',
    isCurrentRole: true,
    responsibilities: [
      'Developing and maintaining enterprise-scale ASP.NET Core applications for Cognizant',
      'Designing and implementing REST APIs consumed by multiple frontend clients',
      'Writing optimized SQL Server queries and stored procedures for complex business logic',
      'Collaborating with cross-functional teams and Cognizant stakeholders',
      'Participating in code reviews and enforcing coding standards',
      'Contributing to system architecture decisions and technical documentation',
    ],
    technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'REST API', 'Entity Framework', 'JavaScript', 'HTML5', 'CSS3'],
    achievements: [
      'Successfully delivered SOX Assurance compliance platform for Cognizant',
      'Maintained 99.9% uptime for mission-critical enterprise applications',
      'Improved API response times through systematic performance optimization',
    ],
    companyUrl: 'https://careernet.in',
  },
  {
    id: 'diyan-technologies',
    company: 'Diyan Technologies Pvt. Ltd.',
    role: '.NET Developer',
    type: 'Full-time',
    startDate: '2019',
    endDate: '2022',
    location: 'Ahmedabad, India',
    description:
      'Worked as a .NET Developer building diverse web applications across multiple domains. Gained deep expertise in REST API development, real-time systems with SignalR/WebSockets, and performance optimization.',
    isCurrentRole: false,
    responsibilities: [
      'Developed RESTful APIs using ASP.NET Core and Web API for multiple client projects',
      'Implemented real-time features using SignalR and WebSockets for live notifications',
      'Optimized application performance through query optimization and caching strategies',
      'Mentored junior developers on .NET best practices and clean code principles',
      'Participated in technical interviews for developer hiring',
      'Collaborated in Agile sprints with daily standups and sprint planning',
    ],
    technologies: ['ASP.NET Core', 'ASP.NET MVC', 'C#', 'SignalR', 'WebSockets', 'SQL Server', 'MySQL', 'React.js', 'Angular 9', 'JavaScript'],
    achievements: [
      'Led development of Wegodoo real-time task management platform',
      'Implemented SignalR achieving <50ms notification delivery',
      'Mentored 3 junior developers, improving team velocity by 30%',
      'Built Infovores trade analytics platform serving millions of records',
    ],
  },
];

