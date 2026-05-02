'use client';

import { useState } from 'react';
import { SITE_CONFIG } from '@/utils/constants';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implementar envío de formulario
  };

  return (
    <div className="w-full min-h-screen text-white pt-24">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-primary/10 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Contacta con Nosotros</span>
          </h1>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Envíanos tu consulta</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-secondary border border-purple-primary/30 rounded-lg text-white placeholder-gray-medium focus:outline-none focus:border-purple-primary transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-secondary border border-purple-primary/30 rounded-lg text-white placeholder-gray-medium focus:outline-none focus:border-purple-primary transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-secondary border border-purple-primary/30 rounded-lg text-white placeholder-gray-medium focus:outline-none focus:border-purple-primary transition-colors"
                  placeholder="Asunto de tu mensaje"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black-secondary border border-purple-primary/30 rounded-lg text-white placeholder-gray-medium focus:outline-none focus:border-purple-primary transition-colors resize-none"
                  placeholder="Cuéntanos about tu proyecto..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-primary to-purple-dark px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-primary/50 transition-all"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Otra forma de contactarnos</h2>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-purple-light">Email</h3>
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-medium hover:text-purple-primary transition-colors">
                {SITE_CONFIG.email}
              </a>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2 text-purple-light">Teléfono</h3>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-medium hover:text-purple-primary transition-colors">
                {SITE_CONFIG.phone}
              </a>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4 text-purple-light">Síguenos</h3>
              <div className="flex gap-4">
                {[
                  { name: 'Twitter', icon: '𝕏', url: SITE_CONFIG.social.twitter },
                  { name: 'GitHub', icon: '⚙️', url: SITE_CONFIG.social.github },
                  { name: 'LinkedIn', icon: '💼', url: SITE_CONFIG.social.linkedin },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-purple-primary/30 flex items-center justify-center hover:border-purple-primary hover:bg-purple-primary/10 transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-purple-light">Horario de Atención</h3>
              <div className="text-gray-medium space-y-1">
                <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p>Sábado: 10:00 AM - 2:00 PM</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
