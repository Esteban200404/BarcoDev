"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Servicios", id: "servicios" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Sobre Nosotros", id: "sobre-nosotros" },
    { name: "Contacto", id: "contacto" },
  ];

  return (
    <div className="w-full min-h-screen text-white bg-black-primary overflow-hidden">
      {/* Mouse Follow Glow Effect */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-300"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-40 transition-all duration-500 ${
          scrollY > 50
            ? "backdrop-blur-xl bg-black-primary/95 border-b border-purple-primary/30 shadow-2xl shadow-purple-primary/10"
            : "bg-transparent border-b border-purple-primary/10"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ml-12!">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="BarcoDev Logo"
                  width={62}
                  height={62}
                  className="rounded-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-primary to-purple-dark rounded-xl animate-pulse opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-1 gap-4 ">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="px-5 py-2 text-gray-medium hover:text-purple-light hover:cursor-pointer !p-2 hover:bg-purple-primary/10 rounded-lg transition-all duration-300 relative group !hover:cursor-pointer"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-primary to-purple-dark group-hover:w-3/4 transition-all duration-300 rounded !hover:cursor-pointer"></span>
                  </button>
                </li>
              ))}
              <li className="ml-4">
                <button
                  onClick={() => window.open('https://api.whatsapp.com/send/?phone=573105752462&text=Hola%2C+me+gustar%C3%ADa+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0', '_blank')}
                  className="relative group px-6 py-2.5 bg-gradient-to-r from-purple-primary to-purple-dark rounded-lg !p-2 font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-primary/40 hover:scale-105"
                >
                  <span className="relative z-10">Empezar Proyecto</span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center rounded-lg hover:bg-purple-primary/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-purple-primary rounded transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-purple-primary rounded transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "my-1"}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-purple-primary rounded transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="pb-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 text-gray-medium hover:text-purple-light hover:bg-purple-primary/10 rounded-lg transition-all duration-300"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=573105752462&text=Hola%2C+me+gustar%C3%ADa+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0', '_blank')}
                className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-purple-primary to-purple-dark rounded-lg font-semibold text-white"
              >
                Empezar Proyecto
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-black-primary via-purple-primary/5 to-black-primary">
        {/* Animated Background with Parallax */}
        <div className="absolute inset-0 grid-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-black-primary/40 to-black-primary"></div>
        </div>

        {/* Enhanced Floating Orbs with more diversity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-primary/25 rounded-full filter blur-3xl animate-float opacity-80 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-dark/25 rounded-full filter blur-3xl animate-float-slow opacity-80"></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-deep/20 rounded-full filter blur-3xl animate-pulse opacity-70"></div>
          <div
            className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-purple-primary/15 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Rotating Rings - more pronounced */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-purple-primary/25 rounded-full animate-spin-slow opacity-70"></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-purple-dark/25 rounded-full animate-spin-slow opacity-60"
            style={{ animationDirection: "reverse", animationDuration: "30s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-purple-primary/20 rounded-full animate-spin-slow opacity-50"
            style={{ animationDuration: "15s" }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up">
              <div className="badge-glow">
                <span className="text-sm font-semibold text-purple-light flex items-center gap-2">
                  <span className="text-lg">🚀</span> Transformamos Ideas en
                  Código
                </span>
              </div>
            </div>

            {/* Main Heading - Enhanced Typography */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4 leading-[0.95] tracking-tighter">
              <span className="block text-white mb-6 font-black drop-shadow-2xl">
                Software
              </span>
              <span
                className="gradient-text inline-block text-transparent bg-gradient-to-r from-purple-primary via-purple-light to-purple-dark animate-pulse drop-shadow-2xl"
                style={{
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                PREMIUM
              </span>
              <br />
              <span className="block text-purple-light font-bold drop-shadow-xl">
                para tu negocio
              </span>
            </h1>

            {/* Subtitle - Better spaced and readable */}
            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-medium mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-90"
              style={{ animationDelay: "0.1s" }}
            >
              Creamos soluciones tecnológicas{" "}
              <span className="text-purple-light font-semibold">
                innovadoras
              </span>{" "}
              que impulsan el crecimiento de tu negocio.
              <br className="hidden md:block" />
              Más de{" "}
              <span className="text-purple-light font-semibold">
                10 años
              </span>{" "}
              entregando proyectos excepcionales.
            </p>

            {/* CTA Buttons - Enhanced */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <button
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=573105752462&text=Hola%2C+me+gustar%C3%ADa+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0', '_blank')}
                className="group relative px-12 py-4 bg-gradient-to-r from-purple-primary via-purple-dark to-purple-deep rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-primary/50 hover:scale-105 hover:-translate-y-1 glow"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center md:justify-start">
                  Iniciar Proyecto
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              </button>

              <button
                onClick={() => scrollToSection("portfolio")}
                className="group relative px-12 py-4 border-2 border-purple-primary/50 rounded-xl font-bold text-lg text-purple-light hover:text-white transition-all duration-300 hover:border-purple-primary hover:bg-purple-primary/10 hover:shadow-lg hover:shadow-purple-primary/20 hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center md:justify-start">
                  Ver Portfolio
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Tech Stack Icons - Better display */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-xs md:text-sm text-gray-dark mb-6 uppercase tracking-widest font-semibold">
                Tecnologías que dominamos
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                  "⚛️ React",
                  "🟢 Node.js",
                  "🐍 Python",
                  "☁️ AWS",
                  "🐳 Docker",
                  "📱 Flutter",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="px-5 py-2.5 glass rounded-full text-sm text-purple-light hover:text-purple-primary hover:bg-purple-primary/20 hover:border-purple-primary/50 transition-all duration-300 cursor-pointer hover:scale-110"
                    style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-8 h-12 border-2 border-purple-primary/50 rounded-full flex items-start justify-center p-2 hover:border-purple-primary transition-colors">
            <div className="w-1.5 h-3 bg-purple-primary rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-dark text-center mt-4 uppercase tracking-wider font-semibold">
            Desplázate
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="servicios"
        className="py-32 px-4 relative items-center justify-center !p-4"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black-primary via-black-secondary/20 to-black-primary items-center "></div>
        <div className="absolute top-0 left-0 right-0 h-px section-divider"></div>

        <div className="p-4 mx-auto relative z-10 w-full">
          {/* Section Header - Enhanced */}
          <div className="text-center mb-24">
            <div className="inline-block mb-4 animate-fade-in-up"></div>
            <h2
              className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="gradient-text">Soluciones a tu Medida</span>
            </h2>
            <p
              className="text-gray-medium text-lg md:text-xl !p-4 mx-auto leading-relaxed animate-fade-in-up text-center items-center"
              style={{ animationDelay: "0.2s" }}
            >
              Ofrecemos un ecosistema completo de servicios tecnológicos para
              llevar tu negocio al siguiente nivel
            </p>
          </div>

          {/* Services Grid - 3 columns with better spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 place-items-center mt-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="!p-2 group relative w-full p-8 md:p-12 rounded-3xl glass hover:border-purple-primary/80 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-primary/50 cursor-pointer service-card border border-purple-primary/40 hover:cursor-pointer"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Animated Background Gradient */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(196, 181, 253, 0.08) 100%)",
                  }}
                ></div>

                {/* Icon - Enhanced */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-primary/30 to-purple-dark/30 flex items-center justify-center text-6xl group-hover:scale-150 group-hover:rotate-12 transition-all duration-400 border border-purple-primary/50 shadow-2xl shadow-purple-primary/30 group-hover:shadow-purple-primary/60">
                    {service.icon}
                  </div>
                  <div className="absolute -inset-4 bg-purple-primary/30 rounded-2xl blur-2xl opacity-30 group-hover:opacity-100 transition-all duration-500 -z-10 group-hover:blur-3xl"></div>
                </div>

                {/* Content - Better hierarchy */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-purple-light transition-colors duration-300 relative z-10">
                  {service.name}
                </h3>
                <p className="text-gray-medium mb-8 leading-relaxed text-base relative z-10 group-hover:text-gray-light transition-colors">
                  {service.description}
                </p>

                {/* Features - Enhanced list */}
                <ul className="space-y-4 mb-8 relative z-10">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-medium group-hover:text-purple-light transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-purple-primary mr-3 flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Line Animation */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-purple-primary via-purple-dark to-purple-deep rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 px-4 flex overflow-hidden !items-center !justify-center !p-4 !w-full" id="portfolio">
        <div className="absolute inset-0 particles-bg"></div>
        <div className="absolute top-0 left-0 right-0 h-px section-divider"></div>

        <div className="max-w-6xl mx-auto relative z-10 w-full items-center flex-col  justify-center gap-8">
          <div className="flex">
            {/* Section Header */}
            <div className="text-center mb-24 w-full items-center justify-center">
              <h2
                className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="gradient-text">Números que Hablan</span>
              </h2>
              <p
                className="text-gray-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up !w-full"
                style={{ animationDelay: "0.2s" }}
              >
                Nuestra trayectoria y compromiso nos respaldan como líderes en
                desarrollo de software
              </p>
            </div>

            {/* Stats Grid - Enhanced */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 place-items-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-8 md:p-10 rounded-2xl glass hover:border-purple-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-primary/30 w-full"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-primary to-purple-dark flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400 shadow-lg shadow-purple-primary/40">
                      <span className="text-4xl font-extrabold text-white">
                        {stat.number}
                      </span>
                    </div>
                    <div className="absolute -inset-4 bg-purple-primary/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-purple-light group-hover:text-white transition-colors">
                    {stat.title}
                  </h3>
                  <p className="text-gray-dark text-sm md:text-base leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Benefits Grid */}
          <div className="!m-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 place-items-center">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex gap-6 md:gap-8 p-8 md:p-10 rounded-2xl glass hover:border-purple-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-primary/30 hover:-translate-y-2"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-purple-primary/20 to-purple-dark/20 flex items-center justify-center text-3xl md:text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-400 border border-purple-primary/30">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-purple-light group-hover:text-white transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-medium leading-relaxed text-base">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 relative w-full flex !items-center !justify-center !p-4 gap-8" id="sobre-nosotros">
        <div className="absolute top-0 left-0 right-0 h-px section-divider"></div>

        <div className="max-w-6xl mx-auto  w-full">
          <div className="!text-center flex-col mb-20 w-full items-center justify-center">
            <h2
              className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="gradient-text">
                Lo que dicen nuestros clientes
              </span>
            </h2>
            <p
              className="text-gray-medium text-lg md:text-xl !p-4 mx-auto leading-relaxed animate-fade-in-up text-center items-center" 
              style={{ animationDelay: "0.2s" }}
            >
              Descubre cómo hemos transformado negocios alrededor del mundo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center !mt-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative p-8 md:p-10 rounded-2xl glass hover:border-purple-primary/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-primary/30"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Decorative Quote Mark */}
                <div className="absolute -top-4 -left-2 text-6xl text-purple-primary/20 font-serif group-hover:text-purple-primary/40 transition-colors">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-purple-primary group-hover:text-yellow-400 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote - Enhanced */}
                <p className="text-base md:text-lg text-gray-medium mb-8 leading-relaxed italic relative z-10">
                  "{testimonial.quote}"
                </p>

                {/* Author - Enhanced */}
                <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-purple-primary/20">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-primary to-purple-dark flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-primary/40 group-hover:scale-110 transition-transform">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4 relative overflow-hidden flex items-center justify-center !p-4 !w-full" id="contacto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-primary/15 via-purple-dark/15 to-purple-deep/15"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-primary/25 rounded-full blur-3xl animate-pulse opacity-70"></div>
          <div
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-dark/25 rounded-full blur-3xl animate-pulse opacity-70"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-deep/15 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-[1.1] animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="gradient-text">Transformemos tu Visión</span>
            <span className="text-white"> en Realidad</span>
          </h2>
          <p
            className="text-gray-medium text-lg md:text-xl !p-4 mx-auto leading-relaxed animate-fade-in-up text-center items-center"
            style={{ animationDelay: "0.2s" }}
          >
            Agenda una consulta gratuita y descubre cómo podemos potenciar tu
            negocio con tecnología de vanguardia
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in-up w-full"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=573105752462&text=Hola%2C+me+gustar%C3%ADa+m%C3%A1s+informaci%C3%B3n.&type=phone_number&app_absent=0', '_blank')}
              className="group relative px-14 md:px-16 py-5 md:py-6 bg-gradient-to-r from-purple-primary via-purple-dark to-purple-deep rounded-xl font-bold text-lg md:text-xl text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-primary/70 hover:scale-110 hover:-translate-y-2 glow-strong !m-8 !p-2"
            >
              <span className="relative z-10 flex items-center gap-3 justify-center">
                Contactar Ahora
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </button>
          </div>

          {/* Trust Badges */}
          <div
            className="flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8 text-gray-medium animate-fade-in-up w-full"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3 px-6 py-4 rounded-lg glass hover:border-purple-primary/50 transition-all duration-300 hover:scale-105">
              <svg
                className="w-6 h-6 text-purple-primary flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-semibold">Consulta Gratuita</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 rounded-lg glass hover:border-purple-primary/50 transition-all duration-300 hover:scale-105">
              <svg
                className="w-6 h-6 text-purple-primary flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-semibold">
                Presupuesto sin Compromiso
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 rounded-lg glass hover:border-purple-primary/50 transition-all duration-300 hover:scale-105">
              <svg
                className="w-6 h-6 text-purple-primary flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-semibold">Respuesta en 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black-secondary/80 backdrop-blur-md border-t border-purple-primary/20 py-20 px-4 !w-full !flex justify-center items-center" >
        <div className="max-w-6xl mx-auto !w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 place-items-start">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="BarcoDev Logo"
                  width={62}
                  height={62}
                  className="rounded-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-primary to-purple-dark rounded-xl animate-pulse opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
              </div>
              <p className="text-gray-medium text-sm mb-8 leading-relaxed">
                Transformamos ideas en soluciones digitales innovadoras y
                escalables desde 2014.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { name: "GitHub", icon: "🐙" },
                  { name: "LinkedIn", icon: "💼" },
                  { name: "Twitter", icon: "𝕏" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-lg glass flex items-center justify-center text-xl text-gray-medium hover:text-purple-light hover:border-purple-primary/50 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg text-purple-light mb-6 uppercase tracking-wider">
                Navegación
              </h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-medium hover:text-purple-light transition-colors text-sm font-medium hover:translate-x-1 transition-transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg text-purple-light mb-6 uppercase tracking-wider">
                Servicios
              </h4>
              <ul className="space-y-4 text-sm text-gray-medium">
                {services.slice(0, 5).map((service, index) => (
                  <li
                    key={index}
                    className="hover:text-purple-light transition-colors font-medium hover:translate-x-1 transition-transform"
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg text-purple-light mb-6 uppercase tracking-wider">
                Contacto
              </h4>
              <ul className="space-y-4 text-sm text-gray-medium">
                <li className="flex items-start gap-3 hover:text-purple-light transition-colors font-medium group">
                  <span className="text-purple-primary group-hover:scale-125 transition-transform">
                    📧
                  </span>
                  <a
                    href="mailto:contacto@barcodev.com"
                    className="hover:underline"
                  >
                    contacto@barcodev.com
                  </a>
                </li>
                <li className="flex items-start gap-3 hover:text-purple-light transition-colors font-medium group">
                  <span className="text-purple-primary group-hover:scale-125 transition-transform">
                    📱
                  </span>
                  <span>+1 (555) 000-0000</span>
                </li>
                <li className="flex items-start gap-3 hover:text-purple-light transition-colors font-medium group">
                  <span className="text-purple-primary group-hover:scale-125 transition-transform">
                    📍
                  </span>
                  <span>Remoto Global</span>
                </li>
                <li className="flex items-start gap-3 hover:text-purple-light transition-colors font-medium group">
                  <span className="text-purple-primary group-hover:scale-125 transition-transform">
                    🕒
                  </span>
                  <span>Lun - Vie: 9am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-dark text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} BarcoDev. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-8 text-sm text-gray-medium flex-wrap justify-center md:justify-end">
              <a
                href="#"
                className="hover:text-purple-light transition-colors font-medium hover:underline"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="hover:text-purple-light transition-colors font-medium hover:underline"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    name: "Desarrollo Web",
    icon: "🌐",
    description:
      "Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías.",
    features: [
      "React, Next.js, Vue",
      "API RESTful & GraphQL",
      "Responsive & PWA",
    ],
  },
  {
    name: "Desarrollo Mobile",
    icon: "📱",
    description:
      "Apps nativas y cross-platform de alto rendimiento para iOS y Android.",
    features: [
      "React Native & Flutter",
      "UI/UX Optimizada",
      "Publicación en Stores",
    ],
  },
  {
    name: "Backend & Cloud",
    icon: "☁️",
    description: "Infraestructura robusta, segura y escalable en la nube.",
    features: [
      "Node.js, Python, Go",
      "AWS, GCP, Azure",
      "Microservicios & Serverless",
    ],
  },
  {
    name: "DevOps & CI/CD",
    icon: "⚙️",
    description: "Automatización de despliegues y gestión de infraestructura.",
    features: [
      "Docker & Kubernetes",
      "GitHub Actions, Jenkins",
      "Monitoring & Logging",
    ],
  },
  {
    name: "Consultoría Tech",
    icon: "💡",
    description:
      "Estrategia tecnológica y transformación digital para tu negocio.",
    features: [
      "Auditoría de Código",
      "Arquitectura de Software",
      "Selección de Tech Stack",
    ],
  },
  {
    name: "Soporte 24/7",
    icon: "🛠️",
    description: "Mantenimiento continuo y soporte técnico disponible siempre.",
    features: [
      "Monitoreo Proactivo",
      "Bug Fixes & Updates",
      "Backup & Recovery",
    ],
  },
];

const stats = [
  {
    number: "10+",
    title: "Años de Experiencia",
    description: "Década de innovación tecnológica",
  },
  {
    number: "150+",
    title: "Proyectos Entregados",
    description: "Startups a Fortune 500",
  },
  {
    number: "98%",
    title: "Clientes Satisfechos",
    description: "Ratio de satisfacción excepcional",
  },
  {
    number: "25+",
    title: "Países Alcanzados",
    description: "Presencia global comprobada",
  },
];

const benefits = [
  {
    icon: "🚀",
    title: "Entrega Rápida",
    description:
      "Metodologías ágiles para entregar valor en tiempo récord sin sacrificar calidad.",
  },
  {
    icon: "🔒",
    title: "Código Seguro",
    description:
      "Implementamos las mejores prácticas de seguridad en cada línea de código.",
  },
  {
    icon: "📈",
    title: "Escalabilidad",
    description:
      "Arquitecturas diseñadas para crecer junto con tu negocio sin límites.",
  },
  {
    icon: "🤝",
    title: "Soporte Dedicado",
    description:
      "Equipo comprometido disponible 24/7 para resolver cualquier necesidad.",
  },
];

const testimonials = [
  {
    quote:
      "BarcoDev transformó completamente nuestra plataforma. El equipo es increíblemente profesional y entregó más de lo esperado.",
    name: "María González",
    role: "CTO, TechStartup",
    initials: "MG",
  },
  {
    quote:
      "La calidad del código y la arquitectura que implementaron nos ha permitido escalar sin problemas. Totalmente recomendados.",
    name: "Carlos Rodríguez",
    role: "Director de Ingeniería, Enterprise Co",
    initials: "CR",
  },
  {
    quote:
      "Su consultoría técnica nos ayudó a tomar mejores decisiones y ahorrar millones en infraestructura. Un partner estratégico real.",
    name: "Ana Martínez",
    role: "CEO, Digital Company",
    initials: "AM",
  },
];
