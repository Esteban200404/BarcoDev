'use client';

const projects = [
  {
    id: 1,
    title: 'Plataforma E-commerce Global',
    category: 'Web Development',
    description: 'Sistema de e-commerce escalable con pagos internacionales',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    image: '🛍️',
    year: 2024,
  },
  {
    id: 2,
    title: 'App Móvil de Streaming',
    category: 'Mobile Development',
    description: 'Aplicación nativa para iOS y Android con reproducción en vivo',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: '📺',
    year: 2024,
  },
  {
    id: 3,
    title: 'Dashboard Analítico',
    category: 'Web Development',
    description: 'Sistema de BI con visualización en tiempo real',
    tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    image: '📊',
    year: 2023,
  },
  {
    id: 4,
    title: 'Sistema de Gestión Empresarial',
    category: 'Backend Development',
    description: 'ERP completo para medianas empresas',
    tags: ['Django', 'REST API', 'PostgreSQL', 'Docker'],
    image: '📈',
    year: 2023,
  },
  {
    id: 5,
    title: 'Plataforma SaaS',
    category: 'Full Stack',
    description: 'Solución cloud con autenticación avanzada',
    tags: ['Next.js', 'Stripe', 'Auth0', 'AWS'],
    image: '☁️',
    year: 2023,
  },
  {
    id: 6,
    title: 'App de Fitness',
    category: 'Mobile Development',
    description: 'Aplicación con seguimiento de entrenamientos e IA',
    tags: ['Flutter', 'Machine Learning', 'Firebase'],
    image: '💪',
    year: 2022,
  },
];

export default function PortfolioPage() {
  return (
    <div className="w-full min-h-screen text-white pt-24">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-primary/10 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Nuestro Portfolio</span>
          </h1>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Proyectos exitosos entregados a clientes de todo el mundo
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="glass rounded-xl overflow-hidden hover:border-purple-primary/50 transition-all group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-purple-primary/20 to-purple-dark/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-purple-light mb-1">{project.title}</h3>
                      <p className="text-sm text-purple-primary font-semibold">{project.category}</p>
                    </div>
                    <span className="text-sm text-gray-medium">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-medium text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded bg-purple-primary/20 text-purple-light">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 py-2 border border-purple-primary/30 rounded hover:border-purple-primary hover:bg-purple-primary/10 transition-colors text-sm font-semibold">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-black-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Proyectos', value: '150+' },
              { label: 'Clientes', value: '80+' },
              { label: 'Países', value: '25+' },
              { label: 'Años', value: '10+' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Quieres ser parte de nuestro portafolio?
          </h2>
          <p className="text-gray-medium mb-8">
            Contáctanos y convierte tu idea en realidad
          </p>
          <button className="bg-gradient-to-r from-purple-primary to-purple-dark px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-primary/50 transition-all">
            Iniciar Proyecto
          </button>
        </div>
      </section>
    </div>
  );
}
