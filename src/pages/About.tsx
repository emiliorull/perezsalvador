import { Mail, Award, GraduationCap, Briefcase, BadgeCheck, UserCheck, Building } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { clinicInfo } from '../data/pages';

interface Doctor {
  name: string;
  collegiate: string;
  image: string;
  email: string;
  bio: string;
  highlights: string[];
  award?: string;
  status: 'active' | 'founder';
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Eduardo Pérez-Salvador',
    collegiate: 'Colegiado 092852936',
    image: '/images/dr-eduardo-perez-salvador.jpg',
    email: 'eduardo@perezsalvadoroftalmologos.com',
    bio: 'Licenciado por la Universidad de Navarra. Alumno interno por méritos. Especialista en Oftalmología y Cirugía Oculoplástica. Miembro de la SERV (Sociedad Española de Retina y Vítreo) y Vocal por Burgos de la ACLOFT.',
    highlights: [
      'Licenciado por la Universidad de Navarra',
      'Doctor en Medicina y Cirugía con Sobresaliente CUM LAUDE',
      'Especialista en Oftalmología y Cirugía Oculoplástica',
      'Miembro de la SERV – Sociedad Española de Retina y Vítreo',
      'Vocal por Burgos de la ACLOFT',
    ],
    status: 'active',
  },
  {
    name: 'Dr. José Luis Pérez-Salvador',
    collegiate: 'Colegiado 090902129',
    image: '/images/dr-perez-salvador.jpg',
    email: 'joseluis@perezsalvadoroftalmologos.com',
    bio: 'Fundador de la Clínica Oftalmológica Pérez Salvador. Licenciado en Medicina y Cirugía por la Universidad de Granada. Residencia MIR en Clínica de la Concepción (Fundación Jiménez Díaz) y Clínica Puerta de Hierro de Madrid. Formación en centros de Holanda, Suiza y Francia. Título Europeo FEBO (Fellow European Board of Ophthalmology). Fundador y Presidente-Consejero de la Sociedad Castellano-Leonesa de Oftalmología. Actualmente consejero no activo profesionalmente, permanece como fundador y consejero de la clínica.',
    highlights: [
      'Licenciado en Medicina y Cirugía, Universidad de Granada',
      'MIR en Fundación Jiménez Díaz y Clínica Puerta de Hierro (Madrid)',
      'Formación internacional en Holanda, Suiza y Francia',
      'Título Europeo FEBO – Fellow European Board of Ophthalmology',
      'Fundador y Presidente-Consejero de la Sociedad Castellano-Leonesa de Oftalmología',
    ],
    award: 'Premio Nacional de Oftalmología "Ramón Castroviejo" (2002)',
    status: 'founder',
  },
];

export function About({ navigate }: { navigate: (to: string) => void }) {
  return (
    <div>
      <PageHeader
        title="Quiénes somos"
        subtitle="Un equipo médico al servicio de la salud visual de Burgos, con décadas de experiencia y formación de referencia internacional."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-gray-600">
              Ante todo somos médicos oftalmólogos y no una empresa, cadena o franquicia dedicada a explotar la inversión realizada con un objetivo primordial empresarial y económico. Nuestro objetivo es el bienestar y la salud de nuestros pacientes. Para ello, disponemos de la tecnología de vanguardia más avanzada, personalizando el tratamiento de cada paciente y buscando la mejor calidad de visión.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {doctors.map((doc, idx) => (
              <div
                key={doc.name}
                className={`grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12 ${
                  idx % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="lg:col-span-1">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="aspect-[3/4] w-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <a
                      href={`mailto:${doc.email}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-800"
                    >
                      <Mail className="h-4 w-4" />
                      {doc.email}
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {doc.name}
                    </h2>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      {doc.collegiate}
                    </span>
                    {doc.status === 'active' ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        <UserCheck className="h-3.5 w-3.5" />
                        En activo
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                        <Building className="h-3.5 w-3.5" />
                        Fundador · Consejero no activo profesionalmente
                      </span>
                    )}
                  </div>

                  {doc.award && (
                    <div className="mt-4 flex items-start gap-3 rounded-xl border border-burgundy-200 bg-burgundy-50 p-4">
                      <Award className="mt-0.5 h-5 w-5 shrink-0 text-burgundy-700" />
                      <div>
                        <p className="text-sm font-semibold text-burgundy-900">
                          {doc.award}
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="mt-5 leading-relaxed text-gray-700">
                    {doc.bio}
                  </p>

                  <div className="mt-6 space-y-3">
                    {doc.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100">
                          <GraduationCap className="h-3 w-3 text-primary-700" />
                        </div>
                        <span className="text-sm text-gray-700">{h}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <button
                      onClick={() => navigate(doc.name.includes("Eduardo") ? "dr-eduardo-perez-salvador" : "dr-jose-luis-perez-salvador")}
                      className="inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-700 transition-colors shadow-sm"
                    >
                      Ver mi CV completo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center">
            <Briefcase className="mx-auto h-8 w-8 text-primary-600" />
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Nuestra clínica está ubicada en {clinicInfo.address},{' '}
              {clinicInfo.postalCode} {clinicInfo.city}. Puedes solicitar cita
              llamando al{' '}
              <a
                href={clinicInfo.phoneHref}
                className="font-semibold text-primary-700"
              >
                {clinicInfo.phone}
              </a>{' '}
              o a través de nuestro formulario de contacto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

