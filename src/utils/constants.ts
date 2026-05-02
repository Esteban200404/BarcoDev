// Brand Colors
export const COLORS = {
  purple: {
    primary: '#8b5cf6',
    dark: '#7c3aed',
    light: '#c4b5fd',
  },
  black: {
    primary: '#1a1a1a',
    secondary: '#2d2d2d',
    light: '#3f3f3f',
  },
  white: '#ffffff',
  gray: {
    light: '#f5f5f5',
    medium: '#e0e0e0',
  },
};

// Site Configuration
export const SITE_CONFIG = {
  name: 'Barco Dev',
  description: 'Soluciones profesionales en desarrollo de software',
  url: 'https://barco-dev.com',
  email: 'contacto@barco-dev.com',
  phone: '+1 (555) 000-0000',
  social: {
    twitter: 'https://twitter.com/barcodev',
    github: 'https://github.com/barcodev',
    linkedin: 'https://linkedin.com/company/barcodev',
  },
};

// Navigation Links
export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

// Services
export const SERVICES = [
  {
    id: 'web',
    name: 'Desarrollo Web',
    icon: '🌐',
    description: 'Aplicaciones web modernas, rápidas y escalables.',
    features: ['React, Next.js, Vue', 'API RESTful', 'Responsive Design'],
  },
  {
    id: 'mobile',
    name: 'Desarrollo Mobile',
    icon: '📱',
    description: 'Apps nativas y cross-platform de alto rendimiento.',
    features: ['React Native', 'Flutter', 'iOS & Android'],
  },
  {
    id: 'backend',
    name: 'Backend & Cloud',
    icon: '☁️',
    description: 'Infraestructura robusta y escalable en la nube.',
    features: ['Node.js, Python', 'AWS, Google Cloud', 'Microservicios'],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: '⚙️',
    description: 'Automatización, CI/CD y gestión de infraestructura.',
    features: ['Docker, Kubernetes', 'Jenkins, GitHub Actions', 'Monitoring'],
  },
  {
    id: 'consulting',
    name: 'Consultoría Tech',
    icon: '💡',
    description: 'Estrategia tecnológica y transformación digital.',
    features: ['Auditoría técnica', 'Arquitectura', 'Tech Stack Selection'],
  },
  {
    id: 'support',
    name: 'Soporte & Mantenimiento',
    icon: '🛠️',
    description: 'Soporte 24/7 y mantenimiento continuo.',
    features: ['Monitoreo', 'Bug fixes', 'Actualizaciones'],
  },
];

// Meta Tags Configuration
export const META_TAGS = {
  en: {
    title: 'Barco Dev - Professional Software Development',
    description: 'High-quality software solutions with over 10 years of experience.',
  },
  es: {
    title: 'Barco Dev - Desarrollo de Software Profesional',
    description: 'Soluciones de software de alta calidad con más de 10 años de experiencia.',
  },
};
