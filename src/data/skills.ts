// src/data/skills.ts
import type { SkillGroup } from '@/types';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'backend',
    label: 'Backend',
    description: 'Enterprise-grade server-side development',
    color: 'blue',
    skills: [
      { name: 'ASP.NET Core', icon: 'SiDotnet', category: 'backend', proficiency: 95, yearsOfExperience: 5, highlight: true },
      { name: 'C#', icon: 'SiCsharp', category: 'backend', proficiency: 95, yearsOfExperience: 5, highlight: true },
      { name: 'ASP.NET MVC', icon: 'SiDotnet', category: 'backend', proficiency: 90, yearsOfExperience: 5 },
      { name: 'REST API', icon: 'TbApi', category: 'backend', proficiency: 95, yearsOfExperience: 5, highlight: true },
      { name: 'Entity Framework', icon: 'SiDotnet', category: 'backend', proficiency: 90, yearsOfExperience: 4 },
      { name: 'LINQ', icon: 'SiDotnet', category: 'backend', proficiency: 90, yearsOfExperience: 5 },
      { name: 'ADO.NET', icon: 'SiDotnet', category: 'backend', proficiency: 85, yearsOfExperience: 4 },
      { name: 'SignalR', icon: 'TbBrandSignalR', category: 'backend', proficiency: 85, yearsOfExperience: 3, highlight: true },
      { name: 'WebSockets', icon: 'TbWebhook', category: 'backend', proficiency: 80, yearsOfExperience: 3 },
      { name: 'SQL Server', icon: 'SiMicrosoftsqlserver', category: 'backend', proficiency: 90, yearsOfExperience: 5, highlight: true },
      { name: 'MySQL', icon: 'SiMysql', category: 'backend', proficiency: 80, yearsOfExperience: 3 },
    ],
  },
  {
    category: 'frontend',
    label: 'Frontend',
    description: 'Modern, responsive user interface development',
    color: 'violet',
    skills: [
      { name: 'React.js', icon: 'SiReact', category: 'frontend', proficiency: 90, yearsOfExperience: 4, highlight: true },
      { name: 'TypeScript', icon: 'SiTypescript', category: 'frontend', proficiency: 85, yearsOfExperience: 3, highlight: true },
      { name: 'JavaScript', icon: 'SiJavascript', category: 'frontend', proficiency: 90, yearsOfExperience: 5 },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'frontend', proficiency: 85, yearsOfExperience: 3 },
      { name: 'Angular 9', icon: 'SiAngular', category: 'frontend', proficiency: 75, yearsOfExperience: 2 },
      { name: 'HTML5', icon: 'SiHtml5', category: 'frontend', proficiency: 95, yearsOfExperience: 5 },
      { name: 'CSS3', icon: 'SiCss3', category: 'frontend', proficiency: 90, yearsOfExperience: 5 },
      { name: 'AJAX', icon: 'TbBrandJavascript', category: 'frontend', proficiency: 85, yearsOfExperience: 4 },
      { name: 'jQuery', icon: 'SiJquery', category: 'frontend', proficiency: 85, yearsOfExperience: 4 },
    ],
  },
  {
    category: 'tools',
    label: 'Tools & Practices',
    description: 'Professional development workflow & methodologies',
    color: 'emerald',
    skills: [
      { name: 'Git', icon: 'SiGit', category: 'tools', proficiency: 90, yearsOfExperience: 5, highlight: true },
      { name: 'GitHub', icon: 'SiGithub', category: 'tools', proficiency: 90, yearsOfExperience: 5 },
      { name: 'CI/CD', icon: 'TbGitPullRequest', category: 'tools', proficiency: 80, yearsOfExperience: 3 },
      { name: 'Visual Studio', icon: 'SiVisualstudio', category: 'tools', proficiency: 95, yearsOfExperience: 5 },
      { name: 'VS Code', icon: 'SiVisualstudiocode', category: 'tools', proficiency: 90, yearsOfExperience: 4 },
      { name: 'Postman', icon: 'SiPostman', category: 'tools', proficiency: 90, yearsOfExperience: 5 },
      { name: 'Agile', icon: 'TbLayoutKanban', category: 'tools', proficiency: 85, yearsOfExperience: 4 },
    ],
  },
];
