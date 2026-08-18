import {
  Phone,
  MapPin,
  Users,
  Microscope,
  Stethoscope,
  Eye,
  ShieldCheck,
  Award,
  HeartHandshake,
} from 'lucide-react';
import { clinicInfo } from '../data/pages';
import type { NavigateFn } from '../components/Router';

interface HomeProps {
  navigate: NavigateFn;
}

export function Home({ navigate }: HomeProps) {
  const quickAccess = [
    {
      icon: Users,
      title: 'Equipo médico',
      desc: 'Doctores Pérez-Salvador, oftalmólogos con dilatada experiencia y formación internacional.',
      path: 'quienes-somos',
    },
    {
      icon: Microscope,
      title: 'Equipamiento',
      desc: 'Tecnología de última generación para diagnóstico, tratamiento y seguimiento.',
      path: 'dotacion-equipos',
    },
    {
      icon: Stethoscope,
      title: 'Quirófano',
      desc: 'Cirugía en los quirófanos de Clínica Recoletas con máxima seguridad.',
      path: 'area-quirurgica',
    },
    {
      icon: Eye,
      title: 'Especialidades',
      desc: 'Catarata, glaucoma, retina, DMAE, cirugía refractiva y oftalmología pediátrica.',
      path: 'preguntas-frecuentes',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={clinicInfo.heroImage}
            alt="Ojos"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-900/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4" />
              Oftalmología especializada en Burgos
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cuidamos tus ojos para que lo veas claro y nítido
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-100">
              Clínica Oftalmológica Pérez Salvador. Atención oftalmológica
              integral con la tecnología más avanzada y el rigor médico que
              mereces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={clinicInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-800 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" />
                Llamar: {clinicInfo.phone}
              </a>
              <button
                onClick={() => navigate('ubicacion-contacto')}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <MapPin className="h-4 w-4" />
                Ubicación y Contacto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Declaración de principios */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-burgundy-50">
              <HeartHandshake className="h-8 w-8 text-burgundy-700" />
            </div>
          </div>
          <blockquote className="mt-6 text-center text-2xl font-medium leading-relaxed text-gray-800 sm:text-3xl">
            "Ante todo somos médicos oftalmólogos y no una empresa, cadena o
            franquicia dedicada a explotar la inversión realizada con un
            objetivo primordial empresarial y económico.
          </blockquote>
          <p className="mt-4 text-center text-xl font-semibold text-burgundy-700">
            Nuestro objetivo es el bienestar y la salud de nuestros pacientes.
          </p>
        </div>
      </section>

      {/* Quick access grid */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Áreas principales
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Conoce nuestra clínica, nuestra tecnología y las especialidades
              que tratamos.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickAccess.map((item) => (
              <button
                key={item.title}
                onClick={() => navigate(item.path)}
                className="group rounded-2xl border border-gray-100 bg-white p-7 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 transition-colors group-hover:bg-primary-100">
                  <item.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary-600 transition-transform group-hover:translate-x-1">
                  Ver más →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Premio nacional highlight */}
      <section className="bg-gradient-to-br from-burgundy-900 to-burgundy-800 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
                <Award className="h-4 w-4" />
                Reconocimiento
              </div>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Premio Nacional de Oftalmología "Ramón Castroviejo" (2002)
              </h2>
              <p className="mt-3 text-burgundy-100">
                El Dr. José Luis Pérez-Salvador fue galardonado con el máximo
                reconocimiento nacional en oftalmología, un reflejo de nuestro
                compromiso con la excelencia médica.
              </p>
            </div>
            <button
              onClick={() => navigate('quienes-somos')}
              className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-burgundy-800 shadow-lg transition-all hover:scale-[1.02]"
            >
              Conocer al equipo
            </button>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ¿Necesitas una revisión oftalmológica?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pide tu cita hoy mismo. Estaremos encantados de cuidar de tu salud
            visual.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={clinicInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-800 hover:shadow-md"
            >
              <Phone className="h-4 w-4" />
              {clinicInfo.phone}
            </a>
            <button
              onClick={() => navigate('ubicacion-contacto')}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-700 px-6 py-3 text-sm font-semibold text-primary-700 transition-all hover:bg-primary-50"
            >
              <MapPin className="h-4 w-4" />
              Contactar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
