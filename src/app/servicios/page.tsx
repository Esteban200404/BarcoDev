'use client';

import { SERVICES } from '@/utils/constants';

export default function ServiciosPage() {
  return (
    <div className="w-full min-h-screen text-white pt-24">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-primary/10 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Nuestros Servicios</span>
          </h1>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            Soluciones tecnológicas completas adaptadas a tus necesidades específicas
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="glass p-8 rounded-xl hover:border-purple-primary/50 transition-all group">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-purple-light">{service.name}</h3>
                <p className="text-gray-medium mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-purple-primary text-sm uppercase">Características:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-medium">
                        <span className="text-purple-primary mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-3 border border-purple-primary rounded-lg text-purple-light hover:bg-purple-primary/10 transition-colors font-semibold">
                  Más Información
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-black-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="gradient-text">Nuestro Proceso</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Consulta', description: 'Analizamos tus necesidades' },
              { step: 2, title: 'Diseño', description: 'Planificamos la solución' },
              { step: 3, title: 'Desarrollo', description: 'Construimos con excelencia' },
              { step: 4, title: 'Soporte', description: 'Mantenimiento continuo' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-primary to-purple-dark flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-medium text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Interesado en alguno de nuestros servicios?
          </h2>
          <p className="text-gray-medium mb-8">
            Contáctanos para obtener una consulta gratuita y descubre cómo podemos ayudarte.
          </p>
          <button className="bg-gradient-to-r from-purple-primary to-purple-dark px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-primary/50 transition-all">
            Solicitar Consulta
          </button>
        </div>
      </section>
    </div>
  );
}
