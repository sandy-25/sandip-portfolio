import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'firefighter-management',
    title: 'Fire Fighter Management System',
    subtitle: 'Enterprise Resource & Incident Management Platform',
    description:
      'A comprehensive management platform for fire department operations, handling equipment lifecycle, incident reporting, personnel management, and real-time stock tracking.',
    longDescription:
      'Built a full-featured enterprise platform that digitized fire department operations end-to-end. The system replaced manual paper-based processes with a role-based digital workflow, significantly reducing administrative overhead and improving incident response times.',
    role: 'Full Stack Developer',
    status: 'completed',
    featured: true,
    techStack: {
      backend: ['ASP.NET Core', 'C#', 'REST API', 'Entity Framework'],
      frontend: ['React.js', 'TypeScript', 'Tailwind CSS'],
      database: ['SQL Server'],
      tools: ['Git', 'Visual Studio', 'Postman'],
    },
    responsibilities: [
      'Architected the REST API layer with ASP.NET Core, implementing clean separation of concerns',
      'Designed and implemented Role-Based Access Control (RBAC) for multi-tier user management',
      'Built equipment lifecycle management module with stock tracking and alerts',
      'Developed incident management system with real-time status updates',
      'Created responsive React frontend with TypeScript for type safety',
      'Implemented SQL Server database schema with optimized queries',
    ],
    keyAchievements: [
      'Reduced incident report processing time by 60%',
      'Implemented RBAC supporting 5 distinct user roles',
      'Designed API with 40+ endpoints serving real-time data',
      'Achieved sub-200ms API response times through query optimization',
    ],
    architecture:
      'Clean Architecture with Repository Pattern, CQRS for read/write separation, JWT authentication, and React SPA frontend consuming REST APIs.',
    metrics: [
      { label: 'API Endpoints', value: '40+' },
      { label: 'Response Time', value: '<200ms' },
      { label: 'User Roles', value: '5' },
    ],
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.05) 100%)',
    accentColor: '#EF4444',
    liveUrl: 'http://technosardar.com/',
    imageUrl: './assets/firefighter-management.png',
  },
  {
    id: 'wegodoo',
    title: 'Wegodoo',
    subtitle: 'Real-Time Task & Workflow Management Platform',
    description:
      'A sophisticated task management platform featuring real-time notifications via SignalR, dual portal architecture for agents and company owners, and WebSocket-based live collaboration.',
    longDescription:
      'Wegodoo is a B2B SaaS platform enabling companies to manage distributed agent workforces with real-time task assignment, progress tracking, and instant notifications. The dual-portal architecture serves both operational agents and management dashboards.',
    role: '.NET Developer (Full Stack)',
    status: 'completed',
    featured: true,
    techStack: {
      backend: ['ASP.NET Core', 'C#', 'SignalR', 'WebSockets', 'REST API'],
      frontend: ['JavaScript', 'HTML5', 'CSS3', 'AJAX'],
      database: ['SQL Server'],
      tools: ['Git', 'Visual Studio', 'Postman'],
    },
    responsibilities: [
      'Implemented SignalR hubs for real-time bidirectional communication',
      'Built WebSocket connection management with automatic reconnection logic',
      'Developed Agent Portal with task assignment and status tracking',
      'Created Company Owner Portal with analytics and workforce management',
      'Designed notification system delivering instant alerts across all connected clients',
      'Optimized SQL Server queries for high-frequency real-time data access',
    ],
    keyAchievements: [
      'Achieved <50ms real-time notification delivery via SignalR',
      'Supported 200+ concurrent WebSocket connections',
      'Reduced task assignment workflow from 5 steps to 2',
      'Built dual-portal system serving 2 distinct user personas',
    ],
    architecture:
      'Hub-and-spoke SignalR architecture with persistent WebSocket connections, SQL Server for persistence, and AJAX-based frontend consuming real-time events.',
    metrics: [
      { label: 'Notification Latency', value: '<50ms' },
      { label: 'Concurrent Users', value: '200+' },
      { label: 'Portals', value: '2' },
    ],
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.05) 100%)',
    accentColor: '#3B82F6',
    liveUrl: 'https://www.wegodoo.com/',
    imageUrl: './assets/wegodoo.png',
  },
  {
    id: 'sox-assurance',
    title: 'SOX Assurance',
    subtitle: 'Enterprise Compliance & Audit Management System',
    description:
      'An enterprise-grade compliance management platform built for Cognizant, handling Sarbanes-Oxley audit workflows, evidence documentation, control testing, and regulatory reporting.',
    longDescription:
      'SOX Assurance is a mission-critical compliance platform deployed at Cognizant for managing Sarbanes-Oxley (SOX) compliance workflows. The system handles the complete audit lifecycle from control identification through evidence collection, testing, and final reporting to regulatory bodies.',
    role: 'Software Developer',
    status: 'maintained',
    featured: true,
    techStack: {
      backend: ['ASP.NET Core', 'C#', 'Web API', 'Entity Framework', 'LINQ'],
      frontend: ['JavaScript', 'HTML5', 'CSS3'],
      database: ['SQL Server'],
      tools: ['Git', 'Visual Studio', 'Postman', 'CI/CD'],
    },
    responsibilities: [
      'Developed core audit management modules for SOX compliance workflows',
      'Built evidence documentation system with version control and audit trails',
      'Implemented role-based access for auditors, reviewers, and approvers',
      'Created reporting engine generating regulatory-compliant audit reports',
      'Optimized complex SQL queries for large-scale audit data processing',
      'Collaborated with Cognizant stakeholders to gather and implement requirements',
    ],
    keyAchievements: [
      'Delivered enterprise compliance system serving Cognizant audit teams',
      'Implemented complete audit trail with tamper-proof evidence logging',
      'Reduced audit cycle time through automated workflow routing',
      'Achieved 99.9% uptime for mission-critical compliance operations',
    ],
    architecture:
      'Enterprise N-Tier architecture with strict separation of concerns, Entity Framework for ORM, comprehensive audit logging, and role-based security model.',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Audit Modules', value: '12+' },
      { label: 'Client', value: 'Cognizant' },
    ],
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(5,150,105,0.05) 100%)',
    accentColor: '#10B981',
  },
  {
    id: 'infovores',
    title: 'Infovores',
    subtitle: 'Global Trade Analytics & Intelligence Platform',
    description:
      'A data-intensive global trade analytics platform featuring advanced search capabilities, interactive dashboards, and deep data visualization for international trade intelligence.',
    longDescription:
      'Infovores is a comprehensive trade analytics platform enabling businesses to analyze global trade flows, search import/export records, monitor competitors, and identify market opportunities through advanced data visualization and intelligent search.',
    role: 'Full Stack Developer',
    status: 'completed',
    featured: true,
    techStack: {
      backend: ['ASP.NET Core', 'C#', 'REST API', 'ADO.NET', 'LINQ'],
      frontend: ['Angular 9', 'TypeScript', 'HTML5', 'CSS3'],
      database: ['SQL Server'],
      tools: ['Git', 'Visual Studio', 'Postman'],
    },
    responsibilities: [
      'Built Angular 9 frontend with complex data visualization components',
      'Developed high-performance search APIs processing millions of trade records',
      'Implemented advanced filtering with multiple concurrent search parameters',
      'Created interactive analytics dashboard with charts and data grids',
      'Optimized ADO.NET queries for large-scale trade database operations',
      'Designed responsive UI for complex data presentation',
    ],
    keyAchievements: [
      'Optimized search across millions of trade records with <2s response time',
      'Built 15+ interactive dashboard widgets for trade analytics',
      'Implemented multi-parameter advanced search with instant results',
      'Reduced database query time by 70% through indexing and query optimization',
    ],
    architecture:
      'Angular SPA with TypeScript consuming ASP.NET Core REST APIs, ADO.NET for high-performance data access, and SQL Server with optimized indexing for large datasets.',
    metrics: [
      { label: 'Search Response', value: '<2s' },
      { label: 'Records', value: 'Millions' },
      { label: 'Dashboard Widgets', value: '15+' },
    ],
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(109,40,217,0.05) 100%)',
    accentColor: '#7C3AED',
    liveUrl: 'https://www.infovores.in/',
    imageUrl: './assets/Infoverse.png',
  },
  {
    id: 'shoonya-trading',
    title: 'Shoonya Trading',
    subtitle: 'Modern Trading Platform',
    description:
      'A responsive trading platform that provides comprehensive trading, order management, charts, watchlists, and portfolio management in a single workspace.',
    longDescription:
      'Shoonya Trading is a modern web-based trading platform built with Next.js and TypeScript. The application offers an intuitive user experience with seamless access to trading, order management, interactive charts, watchlists, and portfolio tools. The frontend integrates with Sanity.io CMS for dynamic content management and consumes Node.js APIs for real-time data and application functionality.',
    role: 'Front-End Developer',
    status: 'completed',
    featured: true,
    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Framer Motion'],
      backend: ['Node.js APIs', 'Sanity.io CMS'],
      database: [],
      tools: ['Axios'],
    },
    responsibilities: [
      'Developed responsive user interfaces using Next.js and Tailwind CSS.',
      'Integrated dynamic content from Sanity.io CMS.',
      'Consumed Node.js REST APIs using Axios.',
      'Built reusable and maintainable UI components.',
      'Implemented responsive layouts for desktop, tablet, and mobile devices.',
      'Used Material UI components alongside custom Tailwind styling.',
      'Added smooth animations and transitions using Framer Motion.',
      'Collaborated with backend developers to integrate APIs and ensure seamless functionality.',
    ],
    keyAchievements: [
      'Delivered a fully responsive trading platform.',
      'Improved user experience with modern animations and intuitive UI.',
      'Successfully integrated CMS-driven content for easier content management.',
      'Created reusable components to improve development efficiency.',
    ],
    architecture:
      'Component-based architecture using Next.js with TypeScript, Tailwind CSS for styling, Material UI for UI components, Axios for API communication, and Sanity.io as a headless CMS for dynamic content management.',
    metrics: [
      { label: 'Responsive Design', value: '100%' },
      { label: 'CMS Integration', value: 'Sanity.io' },
      { label: 'API Integration', value: 'REST APIs' },
    ],
    gradient: 'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(59,130,246,0.05) 100%)',
    accentColor: '#3B82F6',
  },
  {
    id: 'avenue-six',
    title: 'AvenueSix',
    subtitle: 'Travel Agent Booking Portal',
    description:
      'AvenueSix is a travel agent portal that enables agencies to book accommodations, hotels, experiences, and events across London, Scotland, Switzerland, Paris, and other destinations in France and England.',
    longDescription:
      'AvenueSix is a travel agent portal designed to streamline travel bookings for agencies. The platform supports availability search, quotation creation, invoice generation, and client sharing across multiple destinations. The application uses ASP.NET MVC 4 with SQL Server and AJAX-driven interactions for a responsive booking workflow.',
    role: 'Full-Stack / Front-End Developer',
    status: 'completed',
    featured: true,
    techStack: {
      backend: ['ASP.NET MVC 4', 'C#', 'SQL Server'],
      frontend: ['JavaScript', 'jQuery', 'AJAX', 'HTML', 'CSS'],
      database: ['SQL Server'],
      tools: ['Visual Studio', 'Git'],
    },
    responsibilities: [
      'Developed and maintained features using ASP.NET MVC 4.',
      'Integrated backend APIs to fetch real-time hotel, accommodation, experience, and event availability.',
      'Implemented advanced search and filtering based on destination, travel dates, occupancy, and budget.',
      'Built dynamic booking workflows using AJAX and jQuery to improve user experience.',
      'Developed invoice generation functionality, allowing travel agents to create and send professional invoices to clients.',
      'Worked with SQL Server for data management and optimized database queries where required.',
      'Collaborated with backend developers to integrate APIs and ensure accurate booking data.',
      'Fixed bugs, enhanced existing features, and improved application performance.',
    ],
    keyAchievements: [
      'Delivered an end-to-end travel booking portal for agent workflow management.',
      'Implemented real-time availability search and booking functionality.',
      'Built a seamless quotation and invoice workflow for client delivery.',
      'Optimized booking performance with AJAX-driven UI updates.',
    ],
    architecture:
      'ASP.NET MVC 4 application with SQL Server backend, AJAX-powered frontend, and modular booking workflow components for travel agents.',
    metrics: [
      { label: 'Destinations', value: '6+' },
      { label: 'Workflow Speed', value: 'Real-Time' },
      { label: 'Integration', value: 'API-driven' },
    ],
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.05) 100%)',
    accentColor: '#2563EB',
    liveUrl : 'https://www.avenue6.travel/',
    imageUrl : './assets/avenue-six.png',
  },
];
