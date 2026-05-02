'use client';

const team = [
  {
    name: 'Juan García',
    role: 'CEO & Founder',
    image: '👨‍💼',
    expertise: ['Arquitectura', 'Liderazgo', 'Estrategia'],
  },
  {
    name: 'María López',
    role: 'CTO',
    image: '👩‍💻',
    expertise: ['Backend', 'DevOps', 'Cloud'],
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Lead Frontend',
    image: '👨‍💻',
    expertise: ['React', 'Next.js', 'UX/UI'],
  },
  {
    name: 'Sofia Martínez',
    role: 'Mobile Lead',
    image: '👩‍💻',
    expertise: ['React Native', 'Flutter', 'iOS'],
  },
  {
    name: 'Pedro Sánchez',
    role: 'DevOps Engineer',
    image: '⚙️',
    expertise: ['Kubernetes', 'Docker', 'AWS'],
  },
  {
    name: 'Ana González',
    role: 'QA & Testing',
    image: '👩‍🔬',
    expertise: ['Testing', 'Automation', 'CI/CD'],
  },
];

const values = [
  {
    title: 'Excelencia',
    description: 'Buscamos la perfección en cada línea de código',
    icon: '⭐',
  },
  {
    title: 'Innovación',
    description: 'Adoptamos las últimas tecnologías y prácticas',
    icon: '💡',
  },
  {
    title: 'Transparencia',
    description: 'Comunicación clara con nuestros clientes siempre',
    icon: '🔍',
  },
  {
    title: 'Compromiso',
    description: 'Nos enfocamos en el éxito de tu proyecto',
    icon: '🎯',
  },
];

export default function SobreNosotrosPage() {
  return (
    <div className="w-full min-h-screen text-white pt-24">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-primary/10 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Sobre Barco Dev</span>
          </h1>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Transformando ideas en soluciones tecnológicas desde 2014
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Nuestra Historia</h2>
          <div className="space-y-6 text-gray-medium">
            <p className="text-lg">
              Barco Dev nació en 2014 con una visión clara: crear soluciones tecnológicas de clase mundial 
              que transformaran negocios. Lo que comenzó como un pequeño equipo de desarrolladores apasionados 
              se ha convertido en una empresa reconocida internacionalmente.
            </p>
            <p className="text-lg">
              A lo largo de los años, hemos trabajado con startups en etapa temprana, empresas Fortune 500 y 
              gobiernos. Nuestro compromiso con la calidad, la innovación y la satisfacción del cliente ha sido 
              constante.
            </p>
            <p className="text-lg">
              Hoy, somos un equipo multidisciplinario de más de 50 profesionales dedicados a entregar valor 
              excepcional en cada proyecto que emprendemos.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-black-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Nuestros Valores</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="glass p-6 rounded-xl text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-purple-light">{value.title}</h3>
                <p className="text-gray-medium text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Nuestro Equipo</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="glass p-6 rounded-xl text-center hover:border-purple-primary/50 transition-all">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-purple-primary text-sm font-semibold mb-4">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-purple-primary/20 text-purple-light rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-primary/10 to-purple-dark/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Reconocimientos</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: '🏆', label: 'Best Developer Team 2023' },
              { icon: '⭐', label: '50 Startups to Watch' },
              { icon: '📱', label: 'Innovation Award' },
              { icon: '🌎', label: 'Global Leaders' },
            ].map((achievement, idx) => (
              <div key={idx}>
                <div className="text-4xl mb-2">{achievement.icon}</div>
                <p className="text-sm text-gray-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-gray-medium mb-8">
            Únete a nuestro equipo o colabora con nosotros en tu próximo proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-primary to-purple-dark px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-primary/50 transition-all">
              Iniciar Proyecto
            </button>
            <button className="border border-purple-primary px-8 py-3 rounded-lg font-semibold hover:bg-purple-primary/10 transition-colors">
              Ver Empleos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
